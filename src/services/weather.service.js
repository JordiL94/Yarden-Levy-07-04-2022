import { storageService } from './storage.service.js';

const axios = require('axios');
const DB_KEY = 'weather';
const BASE_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
const API_KEY = "rQYaZXc5Pqjzz6HaAuLtZcK2anQuziYK";

export const weatherService = {
    getWeatherInfo,
    initLocation,
}

// TODO?: figure out if saving weather info to local storage is even necessary
// if not remove all storageService calls
async function getWeatherInfo(location) {
    const storedLocations = await storageService.loadFromStorage(DB_KEY);

    // let locationData = storedLocations.find(storedLocation =>
    //     storedLocation.Key === location.Key);
    // if (locationData) return Promise.resolve(locationData);

    try {
        let locationData = await axios.get(`${BASE_URL + location.Key}?apikey=${API_KEY}`);
        locationData = JSON.parse(locationData);
        storedLocations.push(locationData.DailyForecasts);
        storageService.saveToStorage(DB_KEY, storedLocations);
        return Promise.resolve(locationData.DailyForecasts);
    } catch (err) {
        console.error('Encountered error fetching data:', err);
    }
}

// TODO: figure out if the same method to retrieve weather data from string and from lat/lng is the same 
// and refactor function to simply call getWeatherInfo with currLocation (and add "|| tlv" to the const) 
async function initLocation() {
    // TODO: ask for current location and replace null with the command
    const currLocation = null;

    if (!currLocation) {
        try {
            const defaultCity = JSON.parse(_getDefaultCity());
            const locationData = await getWeatherInfo(defaultCity);
            return Promise.resolve(locationData);
        } catch (err) {
            throw err;
        }
    }

    try {
        // TODO: correctly insert location into the search key
        const locationData = await axios.get(`${BASE_URL + currLocation.Key}?apikey=${API_KEY}`);
        return Promise.resolve(locationData);
    } catch (err) {
        console.error('Encountered error fetching data:', err);
    }
}


function _getDefaultCity() {
    const city = {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
        }
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