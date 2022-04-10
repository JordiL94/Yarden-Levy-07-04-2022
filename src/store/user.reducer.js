const initialState = {
    isDarkMode: false,
    isFarenheit: true,
};

export function userReducer(state = initialState, action) {
    let newState = state;

    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            newState = { ...state, weatherInfo: action.isDarkMode };
            break;
        case 'TOGGLE_FARENHEIT':
            newState = { ...state, locations: action.isFarenheit };
            break;
        default:
            return newState;
    };

    return newState;
}