import * as ActionTypes from './ActionTypes';

export const Lenders = (state = { isLoading: true,
    errMess: null,
    lenders:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LENDERS:
            return {...state, isLoading: false, errMess: null, lenders: action.payload};
        case ActionTypes.LENDERS_LOADING:
                return {...state, isLoading: true, errMess: null, lenders: []}
        case ActionTypes.LENDERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};