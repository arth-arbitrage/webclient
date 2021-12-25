import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Exchanges } from './exchanges';
import { Lenderpools } from './lenderpools';
import { Swappools } from './swappools';
import { Operations } from './operations';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           // exchanges: Exchanges,
            lenderpools: Lenderpools,
            swappools: Swappools,
            operations: Operations,            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}