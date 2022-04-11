import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { lodash as _ } from 'lodash';

import { loadWeatherInfo, loadSuggestions, addToFavorites, removeFromFavorites } from '../store/weather.action';
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

    const [currLocation, setCurrLocation] = useState(null);

    useEffect(() => {
        (async () => {
            await loadWeatherInfo();
        })()
    }, []);

    const onSearch = async (data) => {
        if (typeof (data) === String) {
            if (!locations.length) return;
            await loadWeatherInfo(locations[0]);
            setCurrLocation(locations[0])
        } else {
            await loadWeatherInfo(data);
            setCurrLocation(data);
        }
    };

    const onGetSuggestions = _.debounce(async (data) => {
        await loadSuggestions(data);
    }, 500)

    const onToggleFavorites = (data, action) => {
        if(action) addToFavorites(data);
        else removeFromFavorites(data);
    }

    return (
        <section className="weather-app">
            <SearchBar onSearch={onSearch} placeholder="Search location"
                onGetSuggestions={onGetSuggestions} suggestions={locations} />
            <MainForecast currLocation={currLocation} mainForecast={weatherInfo.Headline}
                favorites={favorites} onToggleFavorites={onToggleFavorites} />
            <WeatherList weatherList={weatherInfo.DailyForecasts} isFarenheit={isFarenheit} />
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