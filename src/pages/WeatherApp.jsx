import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { loadWeatherInfo, loadSuggestions, loadFavorites, addToFavorites, removeFromFavorites } from '../store/weather.action';
import { SearchBar } from '../cmps/SearchBar';
import { WeatherList } from '../cmps/weather/WeatherList';

function _WeatherApp(props) {
    const { weatherInfo, 
        locations, 
        favorites, 
        loadWeatherInfo, 
        loadSuggestions, 
        loadFavorites, 
        addToFavorites, 
        removeFromFavorites 
    } = props;

    const onSearch = async (data) => {
        await loadWeatherInfo(data);
    }

    return (
        <section>
            <SearchBar onSearch={onSearch} placeholder="Search location" loadSuggestions={loadSuggestions} />
            <WeatherList weatherList={weatherInfo} />
        </section>
    )
}

function mapStateToProps({ weatherModule }) {
    return {
        weatherInfo: weatherModule.weatherInfo,
        locations: weatherModule.locations
    }
}

const mapDispatchToProps = {
    loadWeatherInfo, 
    loadSuggestions, 
    loadFavorites, 
    addToFavorites, 
    removeFromFavorites
}

export const WeatherApp = connect(mapStateToProps, mapDispatchToProps)(_WeatherApp);