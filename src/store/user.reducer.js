const initialState = {
    isDarkMode: false,
    isFarenheit: true,
};

export function userReducer(state = initialState, action) {
    let newState = state;

    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            newState = { ...state, isDarkMode: action.isDarkMode };
            break;
        case 'TOGGLE_FARENHEIT':
            newState = { ...state, isFarenheit: action.isFarenheit };
            break;
        default:
            return newState;
    };

    return newState;
}