import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { SearchBar } from '../cmps/SearchBar';
import { WeatherList } from '../cmps/weather/WeatherList';

function _Favorites() {

    const [weatherInfo, setWeatherInfo] = useState(null);

    const onSearch = (val) => {
        return;
    }

    return (
        <section>
            <SearchBar onSearch={onSearch} placeholder="Search favorites" />
            <WeatherList weatherInfo={weatherInfo} />
        </section>
    )
}

function mapStateToProps({ WeatherModule }) {

}

const mapDispatchToProps = {

}

export const Favorites = connect(mapStateToProps, mapDispatchToProps)(_Favorites);