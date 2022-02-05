import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { SearchLocation } from '../cmps/SearchLocation';
import { WeatherInfoList } from '../WeatherInfoList';

function _WeatherApp() {
    return (
        <section>
            <SearchLocation />
            <WeatherInfoList />
        </section>
    )
}

function mapStateToProps({ WeatherModule }){

}

const mapDispatchToProps = {

}

export const WeatherApp = connect(mapStateToProps, mapDispatchToProps)(_WeatherApp);
// export const BoardApp = connect(mapStateToProps, mapDispatchToProps)(_BoardApp);
