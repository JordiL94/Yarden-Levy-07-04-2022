import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { loadFavorites, removeFromFavorites } from '../store/weather.action';
import { SearchBar } from '../cmps/SearchBar';
import { WeatherList } from '../cmps/weather/WeatherList';

function _Favorites(props) {
    const { favorites, loadFavorites, removeFromFavorites, isDarkMode, isFarenheit } = props;

    const onSearch = (val) => {
        
    }

    return (
        <section className={isDarkMode ? "favorites" : "favorites dark"}>
            <SearchBar onSearch={onSearch} placeholder="Search favorites" />
            <WeatherList weatherList={favorites} isFarenheit={isFarenheit} />
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
    removeFromFavorites
}

export const Favorites = connect(mapStateToProps, mapDispatchToProps)(_Favorites);