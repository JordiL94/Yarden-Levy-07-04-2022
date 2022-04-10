import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { SearchBar } from '../cmps/SearchBar';
import { WeatherList } from '../cmps/weather/WeatherList';

function _WeatherApp(props) {
    const { weatherInfo, locations } = props;

    const onSearch = (data) => {

    }

    return (
        <section>
            <SearchBar onSearch={onSearch} placeholder="Search location" />
            <WeatherList weatherList={weatherInfo} />
        </section>
    )
}

function mapStateToProps({ WeatherModule }) {
    return {
        weatherInfo: WeatherModule.weatherInfo,
        locations: WeatherModule.locations
    }
}

const mapDispatchToProps = {

}

export const WeatherApp = connect(mapStateToProps, mapDispatchToProps)(_WeatherApp);