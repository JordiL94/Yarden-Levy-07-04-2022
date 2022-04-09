import { storageService } from './storage.service.js';
import { httpService } from './http.service.js';
import { utils } from './utils.service.js';

const DB_KEY = 'weather';
const FAV_KEY = 'favorite';
// TODO: store API key in .env and import here
const API_KEY = null;

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

    // TODO: find out what to access in object and change name in find
    let locationData = storedLocations.find(storedLocation => storedLocation.name === location);
    if (locationData) return Promise.resolve(locationData);

    try {
        // TODO: correctly insert location into the search key, don't forget to update BASE_URL in httpService
        locationData = await httpService.get(API_KEY + location);
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
    locationData._id = utils.getRandomId();
    const favoriteLocations = storageService.loadFromStorage(FAV_KEY);
    favoriteLocations.push(locationData);
    storageService.saveToStorage(FAV_KEY, favoriteLocations);
}

function removeFromFavorites(locationId) {
    const favoriteLocations = storageService.loadFromStorage(FAV_KEY);
    const updatedFavorites = favoriteLocations.filter(location => location._id !== locationId);
    storageService.saveToStorage(FAV_KEY, updatedFavorites);
}

// TODO: figure out if the same method to retrieve weather data from string and from lat/lng is the same 
// and refactor function to simply call getWeatherInfo with currLocation (and add "|| tlv" to the const) 
async function initLocation() {
    // TODO: ask for current location and replace null with the command
    const currLocation = null;

    if (!currLocation) {
        try {
            const locationData = await getWeatherInfo('Tel-Aviv');
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