const initialState = {
    isDarkMode: false,
    isFarenheit: true,
};

export function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            state = { ...state, isDarkMode: action.isDarkMode };
            return state;
        case 'TOGGLE_FARENHEIT':
            state = { ...state, isFarenheit: action.isFarenheit };
            return state;
        default:
            return state;
    };
}