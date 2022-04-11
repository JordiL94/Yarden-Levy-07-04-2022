import axios from 'axios';

const BASE_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
const GEOPOS_URL = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=';
const API_KEY = "rQYaZXc5Pqjzz6HaAuLtZcK2anQuziYK";


export const weatherService = {
    getWeatherInfo,
    initLocation,
    getCurrLocationInfo
}

async function getWeatherInfo(location) {
    try {
        const { data } = await axios.get(`${BASE_URL + location.Key}?apikey=${API_KEY}`);
        data.Headline['LocalizedName'] = location.LocalizedName;
        data.Headline['Key'] = location.Key;
        return Promise.resolve(data);
    } catch (err) {
        console.error('Encountered error fetching data:', err);
    }
}

async function initLocation() {
    try {
        const pos = await _getPosition();
        return await _geoSuccess(pos);
    } catch (err) {
        console.log(err);
        return await _geoFailure();
    }
}

async function getCurrLocationInfo() {
    try {
        const pos = await _getPosition();
        return await _geoSuccess(pos);
    } catch (err) {
        Promise.reject('Either you didn\'t allow this app to use your location or your browser doesn\'t support this service');
    }
}

function _getPosition() {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

async function _geoSuccess(pos) {
    const { coords } = pos;
    try {
        const { data } = await axios.get(`${GEOPOS_URL + API_KEY}&q=${coords.latitude}%2C${coords.longitude}`);
        const weatherInfo = await getWeatherInfo(data);
        return Promise.resolve(weatherInfo);
    } catch (err) {
        console.error('Encountered error fetching data:', err);
    }
}

async function _geoFailure() {
    try {
        const defaultCity = _getDefaultCity();
        const locationData = await getWeatherInfo(defaultCity);
        return Promise.resolve(locationData);
    } catch (err) {
        throw err;
    }
}

function _getDefaultCity() {
    const city = {
        Key: '215854',
        LocalizedName: 'Tel Aviv',
    };

    return city;
}