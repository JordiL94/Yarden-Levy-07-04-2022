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

async function addToFavorites(locationData, weatherData) {
    const favoriteLocations = await storageService.loadFromStorage(DB_KEY);
    const newFavorite = _createFavorite(locationData, weatherData);
    favoriteLocations.push(newFavorite);
    storageService.saveToStorage(DB_KEY, favoriteLocations);
    return Promise.resolve(newFavorite);
}

async function removeFromFavorites(locationKey) {
    const favoriteLocations = await storageService.loadFromStorage(DB_KEY);
    const updatedFavorites = favoriteLocations.filter(location => location.Key !== locationKey);
    storageService.saveToStorage(DB_KEY, updatedFavorites);
    return Promise.resolve(updatedFavorites);
}

function _createFavorite(locationData, weatherData) {
    const favorite = {
        Key: locationData.Key,
        LocalizedName: locationData.LocalizedName,
        EpochDate: weatherData.EpochDate,
        Temperature: weatherData.Temperature,
        Day: weatherData.Day,
        Night: weatherData.Night,
        Link: weatherData.Link
    }

    return favorite;
}