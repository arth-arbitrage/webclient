import * as ActionTypes from './ActionTypes';

export const Exchanges = (state = { isLoading: true,
    errMess: null,
    exchanges:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EXCHANGES:
            return {...state, isLoading: false, errMess: null, exchanges: action.payload};

        case ActionTypes.EXCHANGES_LOADING:
            return {...state, isLoading: true, errMess: null, exchanges: []}

        case ActionTypes.EXCHANGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};