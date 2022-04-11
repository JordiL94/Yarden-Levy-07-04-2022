import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { loadFavorites, loadWeatherInfo } from '../store/weather.action';
import { SearchBar } from '../cmps/SearchBar';
import { WeatherList } from '../cmps/weather/WeatherList';

function _Favorites(props) {
    const { favorites, 
        loadFavorites, 
        loadWeatherInfo, 
        isDarkMode, 
        isFarenheit 
    } = props;

    useEffect(() => {
        loadFavorites();
    }, []);

    return (
        <section className={isDarkMode ? "favorites" : "favorites dark"}>
            <WeatherList weatherList={favorites} isFarenheit={isFarenheit}
                loadWeatherInfo={loadWeatherInfo} fromFavorites={true} />
        </section>
    )
}

function mapStateToProps({ weatherModule, userModule }) {
    return {
        favorites: weatherModule.favorites,
        isDarkMode: userModule.isDarkMode,
        isFarenheit: userModule.isFarenheit
    }
}

const mapDispatchToProps = {
    loadFavorites,
    loadWeatherInfo
}

export const Favorites = connect(mapStateToProps, mapDispatchToProps)(_Favorites);