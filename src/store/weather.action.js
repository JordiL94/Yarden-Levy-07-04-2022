import { weatherService } from '../services/weather.service.js';

export function loadWeatherInfo(location = null) {
    return async (dispatch, getState) => {
        const state = getState();
        const { weatherInfo } = state.weatherModule;
        try {
            const newInfo = weatherInfo.length ? await weatherService.getWeatherInfo(location) :
                await weatherService.initLocation();
            // if (weatherInfo.length) weatherInfo = await weatherService.getWeatherInfo(location);
            // else weatherInfo = await weatherService.initLocation();
            dispatch({ type: 'SET_WEATHER_INFO', newInfo });
            return Promise.resolve(newInfo);
        } catch (err) {
            console.log('Cannot get weather info', err);
        }
    }
}