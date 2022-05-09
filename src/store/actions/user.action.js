export function toggleDarkMode() {
    return (dispatch, getState) => {
        const state = getState();
        let { isDarkMode } = state.userModule;
        dispatch({ type: 'TOGGLE_DARK_MODE', isDarkMode: !isDarkMode });
    }
}

export function toggleFarenheit() {
    return (dispatch, getState) => {
        const state = getState();
        let { isFarenheit } = state.userModule;
        dispatch({ type: 'TOGGLE_FARENHEIT', isFarenheit: !isFarenheit });
    }
}