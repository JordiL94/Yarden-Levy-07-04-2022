const initialState = {
    weatherInfo: {},
    locations: [],
    favorites: []
};

export function weatherReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_WEATHER_INFO':
            state = { ...state, weatherInfo: {...action.newInfo} };
            return state;
        case 'SET_LOCATIONS':
            state = { ...state, locations: [...action.locations] };
            return state;
        case 'SET_FAVORITES':
            state = { ...state, favorites: [...action.favorites] };
            return state;
        case 'ADD_FAVORITE':
            state = { ...state, favorites: [...state.favorites, action.newFavorite] };
            return state;
        case 'REMOVE_FAVORITE':
            state = {
                ...state,
                favorites: state.favorites.filter(favorite => favorite.Key !== action.key)
            };
            return state;
        default:
            return state;
    };
}