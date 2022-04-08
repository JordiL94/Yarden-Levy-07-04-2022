import { storageService } from './storage.service.js';
import { httpService } from './http.service.js';


const DB_KEY = 'location';
// TODO: link search API key from .env and replace the null with the call
const API_KEY = null;

export const searchService = {
    suggestedLocations
}

async function suggestedLocations(val) {
    const savedLocations = storageService.loadFromStorage(DB_KEY);
    let locations = [];
    if(savedLocations) locations = savedLocations.filter(savedLocation => savedLocation.startsWith(val, 0));
    if(locations.length >= 5) return Promise.resolve(locations.splice(0, 5));

    try {
        // TODO: implement the val in the correct location with the API_KEY, don't forget to update BASE_URL in httpService
        locations = await httpService.get(API_KEY + val);
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