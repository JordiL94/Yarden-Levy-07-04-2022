import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { SearchLocation } from '../cmps/SearchLocation';
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
            <SearchLocation onSearch={onSearch} />
            <WeatherList weatherInfo={weatherInfo} />
        </section>
    )
}

function mapStateToProps({ WeatherModule }) {

}

const mapDispatchToProps = {

}

export const WeatherApp = connect(mapStateToProps, mapDispatchToProps)(_WeatherApp);