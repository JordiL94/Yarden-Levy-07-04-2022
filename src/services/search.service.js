import { storageService } from './storage.service.js';
import axios from 'axios';

const DB_KEY = 'location';
const BASE_URL = 'https://dataservice.accuweather.com//locations/v1/cities/autocomplete?apikey=';
const API_KEY = "rQYaZXc5Pqjzz6HaAuLtZcK2anQuziYK";

export const searchService = {
    suggestedLocations
}

async function suggestedLocations(val) {
    const savedLocations = storageService.loadFromStorage(DB_KEY);
    let locations = [];
    if (savedLocations?.length) locations = savedLocations.filter(savedLocation =>
        savedLocation.LocalizedName.toLowerCase().startsWith(val.toLowerCase(), 0));
    if (locations.length >= 5) return Promise.resolve(locations.splice(0, 5));

    try {
        const { data } = await axios.get(`${BASE_URL + API_KEY}&q=${val}`);
        _addLocationsToStorage(data);
        if (data.length > 5) return Promise.resolve(data.splice(0, 5));
        return Promise.resolve(data);
    } catch (err) {
        console.error('Encountered error while fetching data:', err);
    }
}

function _addLocationsToStorage(locations) {
    const savedLocations = storageService.loadFromStorage(DB_KEY);
    if (!savedLocations) {
        storageService.saveToStorage(DB_KEY, locations);
        return;
    }

    locations.forEach(location => {
        if (!savedLocations.includes(location)) savedLocations.push(location)
    });

    storageService.saveToStorage(DB_KEY, savedLocations);
}