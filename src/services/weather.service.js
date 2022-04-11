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


const exmpData = {
    "Headline": {
        "EffectiveDate": "2022-04-10T08:00:00+03:00",
        "EffectiveEpochDate": 1649566800,
        "Severity": 4,
        "Text": "Pleasant Sunday",
        "Category": "mild",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2022-04-09T07:00:00+03:00",
            "EpochDate": 1649476800,
            "Temperature": {
                "Minimum": {
                    "Value": 60,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 68,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
        },
        {
            "Date": "2022-04-10T07:00:00+03:00",
            "EpochDate": 1649563200,
            "Temperature": {
                "Minimum": {
                    "Value": 60,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 73,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
        },
        {
            "Date": "2022-04-11T07:00:00+03:00",
            "EpochDate": 1649649600,
            "Temperature": {
                "Minimum": {
                    "Value": 63,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 69,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
        },
        {
            "Date": "2022-04-12T07:00:00+03:00",
            "EpochDate": 1649736000,
            "Temperature": {
                "Minimum": {
                    "Value": 59,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 65,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
        },
        {
            "Date": "2022-04-13T07:00:00+03:00",
            "EpochDate": 1649822400,
            "Temperature": {
                "Minimum": {
                    "Value": 59,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 67,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
        }
    ]
};