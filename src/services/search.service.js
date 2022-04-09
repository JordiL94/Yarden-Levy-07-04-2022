import { storageService } from './storage.service.js';
import { httpService } from './http.service.js';
// require('dotenv').config();


const DB_KEY = 'location';
const BASE_URL = 'locations/v1/cities/autocomplete?apikey='
const API_KEY = process.env.API_KEY;

export const searchService = {
    suggestedLocations
}

async function suggestedLocations(val) {
    const savedLocations = storageService.loadFromStorage(DB_KEY);
    let locations = [];
    if(savedLocations) locations = savedLocations.filter(savedLocation => 
        savedLocation.toLowerCase().startsWith(val.toLowerCase(), 0));
    if(locations.length >= 5) return Promise.resolve(locations.splice(0, 5));

    try {
        locations = await httpService.get(`${BASE_URL + API_KEY}&q=${val}`);
        _addLocationsToStorage(locations);
        if(locations.length > 5) return Promise.resolve(locations.splice(0, 5));
        return Promise.resolve(locations);
    } catch (err) {
        console.error('Encountered error while fetching data:', err);
    }
}

function _addLocationsToStorage(locations) {
    const savedLocations = storageService.loadFromStorage(DB_KEY);
    if(!savedLocations) storageService.saveToStorage(DB_KEY, locations);

    const uniqueAdditions = locations.filter(location => !savedLocations.includes(location));
    if(uniqueAdditions.length) savedLocations.push(uniqueAdditions);

    storageService.saveToStorage(DB_KEY, savedLocations);
}

// TODO: add debounce function or use the npm library and add it in the component itself





const autoCompleteExmp = [
    {
        "Version": 1,
        "Key": "210841",
        "Type": "City",
        "Rank": 20,
        "LocalizedName": "Tehran",
        "Country": {
            "ID": "IR",
            "LocalizedName": "Iran"
        },
        "AdministrativeArea": {
            "ID": "07",
            "LocalizedName": "Tehran"
        }
    },
    {
        "Version": 1,
        "Key": "60592",
        "Type": "City",
        "Rank": 23,
        "LocalizedName": "Tengzhou",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SD",
            "LocalizedName": "Shandong"
        }
    },
    {
        "Version": 1,
        "Key": "188046",
        "Type": "City",
        "Rank": 30,
        "LocalizedName": "Tegucigalpa",
        "Country": {
            "ID": "HN",
            "LocalizedName": "Honduras"
        },
        "AdministrativeArea": {
            "ID": "FM",
            "LocalizedName": "Francisco Morazán"
        }
    },
    {
        "Version": 1,
        "Key": "45253",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Teresina",
        "Country": {
            "ID": "BR",
            "LocalizedName": "Brazil"
        },
        "AdministrativeArea": {
            "ID": "PI",
            "LocalizedName": "Piauí"
        }
    },
    {
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
    },
    {
        "Version": 1,
        "Key": "234337",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tepic",
        "Country": {
            "ID": "MX",
            "LocalizedName": "Mexico"
        },
        "AdministrativeArea": {
            "ID": "NAY",
            "LocalizedName": "Nayarit"
        }
    },
    {
        "Version": 1,
        "Key": "246100",
        "Type": "City",
        "Rank": 32,
        "LocalizedName": "Tetouan",
        "Country": {
            "ID": "MA",
            "LocalizedName": "Morocco"
        },
        "AdministrativeArea": {
            "ID": "01",
            "LocalizedName": "Tanger-Tétouan-Al Hoceïma"
        }
    },
    {
        "Version": 1,
        "Key": "61484",
        "Type": "City",
        "Rank": 33,
        "LocalizedName": "Tengchong",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "YN",
            "LocalizedName": "Yunnan"
        }
    },
    {
        "Version": 1,
        "Key": "3558994",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "Tecámac",
        "Country": {
            "ID": "MX",
            "LocalizedName": "Mexico"
        },
        "AdministrativeArea": {
            "ID": "MEX",
            "LocalizedName": "México"
        }
    },
    {
        "Version": 1,
        "Key": "234828",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "Tehuacán",
        "Country": {
            "ID": "MX",
            "LocalizedName": "Mexico"
        },
        "AdministrativeArea": {
            "ID": "PUE",
            "LocalizedName": "Puebla"
        }
    }
]