import { storageService } from './storage.service.js';
import { httpService } from './http.service.js';

const DB_KEY = 'weather';
const FAV_KEY = 'favorite';
const BASE_URL = 'forecasts/v1/daily/5day/'
const API_KEY = process.env.API_KEY;

export const weatherService = {
    getWeatherInfo,
    getFavoriteLocations,
    initLocation,
    addToFavorites,
    removeFromFavorites
}

// TODO?: figure out if saving weather info to local storage is even necessary
// if not remove all storageService calls
async function getWeatherInfo(location) {
    const storedLocations = await storageService.loadFromStorage(DB_KEY);

    let locationData = storedLocations.find(storedLocation =>
        storedLocation.LocalizedName === location.LocalizedName);
    if (locationData) return Promise.resolve(locationData);

    try {
        locationData = await httpService.get(`${BASE_URL + location.key}?apikey=${API_KEY}`);
        storedLocations.push(locationData);
        storageService.saveToStorage(DB_KEY, storedLocations);
        return Promise.resolve(locationData);
    } catch (err) {
        console.error('Encountered error fetching data:', err);
    }
}

function getFavoriteLocations() {
    const favoriteLocations = storageService.loadFromStorage(FAV_KEY);
    return favoriteLocations;
}

function addToFavorites(locationData) {
    const favoriteLocations = storageService.loadFromStorage(FAV_KEY);
    favoriteLocations.push(locationData);
    storageService.saveToStorage(FAV_KEY, favoriteLocations);
}

function removeFromFavorites(locationKey) {
    const favoriteLocations = storageService.loadFromStorage(FAV_KEY);
    const updatedFavorites = favoriteLocations.filter(location => location.key !== locationKey);
    storageService.saveToStorage(FAV_KEY, updatedFavorites);
}

// TODO: figure out if the same method to retrieve weather data from string and from lat/lng is the same 
// and refactor function to simply call getWeatherInfo with currLocation (and add "|| tlv" to the const) 
async function initLocation() {
    // TODO: ask for current location and replace null with the command
    const currLocation = null;

    if (!currLocation) {
        try {
            const tlv = {
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
            const locationData = await getWeatherInfo(tlv);
            return Promise.resolve(locationData);
        } catch (err) {
            throw err;
        }
    }

    try {
        // TODO: correctly insert location into the search key, don't forget to update BASE_URL in httpService
        const locationData = await httpService.get(API_KEY + currLocation);
        return Promise.resolve(locationData);
    } catch (err) {
        console.error('Encountered error fetching data:', err);
    }
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