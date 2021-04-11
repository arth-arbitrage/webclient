import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Exchanges } from './exchanges';
/*import { Lenders } from './lenders';*/
import { Swappools } from './swappools';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           // exchanges: Exchanges,
           /* lenders: Lenders,*/
            swappools: Swappools
                        
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}