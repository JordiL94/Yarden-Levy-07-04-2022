function loadFromStorage(key) {
    const val = localStorage.getItem(key);
    return (val) ? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val) || null);
}

export const storageService = {
    loadFromStorage,
    saveToStorage
}