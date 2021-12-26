import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Lenders } from './lenders';
import { Exchanges } from './exchanges';
import { Operations } from './operations';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            lenders: Lenders,
            exchanges: Exchanges,
            operations: Operations,            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}