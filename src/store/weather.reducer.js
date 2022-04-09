const initialState = {
    weatherInfo: [],
    locations: []
};

export function weatherReducer(state = initialState, action) {
    let newState = state;
    
    switch (action.type) {
        case 'SET_WEATHER_INFO':
            newState = { ...state, weatherInfo: [...action.weatherInfo] };
            break;
        case 'SET_LOCATIONS':
            newState = { ...state, locations: [...action.locations] };
            break;
        default:
            return newState;
    };
}