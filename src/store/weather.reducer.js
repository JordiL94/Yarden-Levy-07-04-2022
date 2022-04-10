const initialState = {
    weatherInfo: [],
    locations: [],
    favorites: []
};

export function weatherReducer(state = initialState, action) {
    let newState = state;

    switch (action.type) {
        case 'SET_WEATHER_INFO':
            newState = { ...state, weatherInfo: [...action] };
            break;
        case 'SET_LOCATIONS':
            newState = { ...state, locations: [...action] };
            break;
        case 'SET_FAVORITES':
            newState = { ...state, locations: [...action] };
            break;
        default:
            return newState;
    };

    return newState;
}