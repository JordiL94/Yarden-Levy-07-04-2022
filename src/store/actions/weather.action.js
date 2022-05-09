import { weatherService } from '../../services/weather.service.js';
import { searchService } from '../../services/search.service.js';
import { favoritesService } from '../../services/favorites.service.js';

export function loadWeatherInfo(location = null) {
    return async (dispatch) => {
        try {
            const newInfo = location ? await weatherService.getWeatherInfo(location) :
                await weatherService.initLocation();
            dispatch({ type: 'SET_WEATHER_INFO', newInfo });
            return Promise.resolve();
        } catch (err) {
            console.log('Couldn\'t retrieve weather info:', err);
        }
    }
}

export function loadSuggestions(val) {
    return async (dispatch) => {
        try {
            const locations = await searchService.suggestedLocations(val);
            dispatch({ type: 'SET_LOCATIONS', locations });
            return Promise.resolve();
        } catch (err) {
            console.log('Couldn\'t retrieve location suggestions:', err);
        }
    }
}

export function loadFavorites() {
    return async (dispatch) => {
        try {
            const favorites = await favoritesService.getFavoriteLocations() || [];
            dispatch({ type: 'SET_FAVORITES', favorites });
            return Promise.resolve();
        } catch (err) {
            console.log('Couldn\'t retrieve favorites:', err);
        }
    }
}

export function addToFavorites(location, weatherData) {
    return async (dispatch) => {
        try {
            const newFavorite = await favoritesService.addToFavorites(location, weatherData);
            dispatch({ type: 'ADD_FAVORITES', newFavorite });
            return Promise.resolve();
        } catch (err) {
            console.log('Couldn\'t add to favorites:', err);
        }
    }
}

export function removeFromFavorites(key) {
    return async (dispatch) => {
        try {
            await favoritesService.removeFromFavorites(key);
            dispatch({ type: 'REMOVE_FAVORITES', key });
            return Promise.resolve();
        } catch (err) {
            console.log('Couldn\'t remove from favorites:', err);
        }
    }
}