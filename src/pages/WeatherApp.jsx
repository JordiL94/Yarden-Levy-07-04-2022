import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { loadWeatherInfo, loadSuggestions, addToFavorites, removeFromFavorites } from '../store/actions/weather.action';
import { SearchBar } from '../cmps/SearchBar';
import { WeatherList } from '../cmps/weather/WeatherList';
import { MainForecast } from '../cmps/weather/MainForecast';

function _WeatherApp(props) {
    const { weatherInfo,
        locations,
        favorites,
        isDarkMode,
        isFarenheit,
        loadWeatherInfo,
        loadSuggestions,
        addToFavorites,
        removeFromFavorites
    } = props;

    useEffect(() => {
        (async () => {
            if(!weatherInfo?.Headline) await loadWeatherInfo();
        })()
    }, []);

    const onSearch = async (data) => {
        if (typeof (data) === String) {
            if (!locations.length) return;
            await loadWeatherInfo(locations[0]);
        } else {
            await loadWeatherInfo(data);
        }
    };

    const onGetSuggestions = _.debounce(async (data) => {
        await loadSuggestions(data);
    }, 500)

    const onToggleFavorites = action => {
        if (action) addToFavorites(weatherInfo);
        else removeFromFavorites(weatherInfo.Headline.Key);
    }

    return (
        <section className={isDarkMode ? "weather-app dark" : "weather-app"}>
            <SearchBar onSearch={onSearch} placeholder="Search location"
                onGetSuggestions={onGetSuggestions} suggestions={locations} />
            <MainForecast mainForecast={weatherInfo.Headline}
                favorites={favorites} onToggleFavorites={onToggleFavorites} />
            <WeatherList weatherList={weatherInfo.DailyForecasts} isFarenheit={isFarenheit}
                loadWeatherInfo={loadWeatherInfo} fromFavorites={false} />
        </section>
    )
}

function mapStateToProps({ weatherModule, userModule }) {
    return {
        weatherInfo: weatherModule.weatherInfo,
        locations: weatherModule.locations,
        favorites: weatherModule.favorites,
        isDarkMode: userModule.isDarkMode,
        isFarenheit: userModule.isFarenheit
    }
}

const mapDispatchToProps = {
    loadWeatherInfo,
    loadSuggestions,
    addToFavorites,
    removeFromFavorites
}

export const WeatherApp = connect(mapStateToProps, mapDispatchToProps)(_WeatherApp);