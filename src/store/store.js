import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { weatherReducer } from './reducers/weather.reducer';
import { userReducer } from './reducers/user.reducer';

const rootReducer = combineReducers({
    weatherModule: weatherReducer,
    userModule: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));