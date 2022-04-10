import { weatherService } from '../services/weather.service.js';
import { searchService } from '../services/search.service.js';
import { favoritesService } from '../services/favorites.service.js';

const _ = require('lodash');

export function loadWeatherInfo(location = null) {
    return async (dispatch, getState) => {
        const state = getState();
        const { weatherInfo } = state.weatherModule;
        try {
            const newInfo = weatherInfo.length ? await weatherService.getWeatherInfo(location) :
                await weatherService.initLocation();
            // if (weatherInfo.length) weatherInfo = await weatherService.getWeatherInfo(location);
            // else weatherInfo = await weatherService.initLocation();
            dispatch({ type: 'SET_WEATHER_INFO', newInfo });
            return Promise.resolve(newInfo);
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
            return Promise.resolve(locations);
        } catch (err) {
            console.log('Couldn\'t retrieve location suggestions:', err);
        }
    }
}
// export const loadSuggestions = _.debounce((val) => {
//     return async (dispatch) => {
//         try {
//             const suggestions = await searchService.suggestedLocations(val);
//             dispatch({ type: 'SET_LOCATIONS', suggestions });
//             return Promise.resolve(suggestions);
//         } catch (err) {
//             console.log('Couldn\'t retrieve location suggestions:', err);
//         }
//     }
// }, 500);

export function loadFavorites() {
    return async (dispatch) => {
        try {
            const favorites = await favoritesService.getFavoriteLocations();
            dispatch({ type: 'SET_FAVORITES', favorites });
            return Promise.resolve(favorites);
        } catch (err) {
            console.log('Couldn\'t retrieve favorites:', err);
        }
    }
}

export function addToFavorites(location) {
    return async (dispatch) => {
        try {
            const newFavorites = await favoritesService.addToFavorites(location);
            dispatch({ type: 'SET_FAVORITES', newFavorites });
            return Promise.resolve(newFavorites);
        } catch (err) {
            console.log('Couldn\'t add to favorites:', err);
        }
    }
}

export function removeFromFavorites(key) {
    return async (dispatch) => {
        try {
            const newFavorites = await favoritesService.removeFromFavorites(key);
            dispatch({ type: 'SET_FAVORITES', newFavorites });
            return Promise.resolve(newFavorites);
        } catch (err) {
            console.log('Couldn\'t remove from favorites:', err);
        }
    }
}