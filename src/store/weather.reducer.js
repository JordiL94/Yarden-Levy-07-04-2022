const initialState = {
    weatherInfo: {},
    locations: [],
    favorites: []
};

export function weatherReducer(state = initialState, action) {
    let newState = state;

    switch (action.type) {
        case 'SET_WEATHER_INFO':
            newState = { ...state, weatherInfo: {...action.newInfo} };
            break;
        case 'SET_LOCATIONS':
            newState = { ...state, locations: [...action.locations] };
            break;
        case 'SET_FAVORITES':
            newState = { ...state, favorites: [...action.favorites] };
            break;
        case 'ADD_FAVORITE':
            newState = { ...state, favorites: [...state.favorites, action.location] };
            break;
        case 'REMOVE_FAVORITE':
            newState = {
                ...state,
                favorites: state.favorites.filter(favorite => favorite.Key !== action.key)
            };
            break;
        default:
            return newState;
    };

    return newState;
}