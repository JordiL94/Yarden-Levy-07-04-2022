import { storageService } from './storage.service.js';

const DB_KEY = 'favorite';

export const favoritesService = {
    getFavoriteLocations,
    addToFavorites,
    removeFromFavorites
}

async function getFavoriteLocations() {
    const favoriteLocations = await storageService.loadFromStorage(DB_KEY) || [];
    return Promise.resolve(favoriteLocations);
}

async function addToFavorites(data) {
    const favoriteLocations = await storageService.loadFromStorage(DB_KEY) || [];
    const newFavorite = _createFavorite(data);
    favoriteLocations.push(newFavorite);
    storageService.saveToStorage(DB_KEY, favoriteLocations);
    return Promise.resolve(newFavorite);
}

async function removeFromFavorites(locationKey) {
    const favoriteLocations = await storageService.loadFromStorage(DB_KEY) || [];
    const updatedFavorites = favoriteLocations.filter(location => location.Key !== locationKey);
    storageService.saveToStorage(DB_KEY, updatedFavorites);
    return Promise.resolve(updatedFavorites);
}

function _createFavorite(data) {
    const { Key, LocalizedName } = data.Headline;
    const { EpochDate, Temperature, Day, Night, Link } = data.DailyForecasts[0];
    const favorite = {
        Key,
        LocalizedName,
        EpochDate,
        Temperature,
        Day,
        Night,
        Link
    }

    return favorite;
}