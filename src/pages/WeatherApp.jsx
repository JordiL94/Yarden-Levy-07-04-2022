import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { SearchBar } from '../cmps/SearchBar';
import { WeatherList } from '../cmps/weather/WeatherList';

function _WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(null);

    useEffect(() => {
        async function fetchData() {

        }
        fetchData();
    })

    const onSearch = (data) => {
        
    }

    return (
        <section>
            <SearchBar onSearch={onSearch} placeholder="Search location" />
            <WeatherList weatherInfo={weatherInfo} />
        </section>
    )
}

function mapStateToProps({ WeatherModule }) {

}

const mapDispatchToProps = {

}

export const WeatherApp = connect(mapStateToProps, mapDispatchToProps)(_WeatherApp);