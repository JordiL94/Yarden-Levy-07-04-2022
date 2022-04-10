import { storageService } from './storage.service.js';

const DB_KEY = 'favorite';

export const favoritesService = {
    getFavoriteLocations,
    addToFavorites,
    removeFromFavorites
}

async function getFavoriteLocations() {
    const favoriteLocations = await storageService.loadFromStorage(DB_KEY);
    return Promise.resolve(favoriteLocations);
}

async function addToFavorites(locationData) {
    const favoriteLocations = await storageService.loadFromStorage(DB_KEY);
    favoriteLocations.push(locationData);
    storageService.saveToStorage(DB_KEY, favoriteLocations);
    return Promise.resolve(favoriteLocations);
}

async function removeFromFavorites(locationKey) {
    const favoriteLocations = await storageService.loadFromStorage(DB_KEY);
    const updatedFavorites = favoriteLocations.filter(location => location.Key !== locationKey);
    storageService.saveToStorage(DB_KEY, updatedFavorites);
    return Promise.resolve(updatedFavorites);
}