import * as ActionTypes from './ActionTypes';

export const Lenders = (state = { isLoading: true,
    errMess: null,
    lenderpools:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LENDERPOOLS:
            return {...state, isLoading: false, errMess: null, lenderpools: [...state.lenderpools, action.payload]};
            //arr: [...state.arr, action.newItem]

        case ActionTypes.LENDERPOOLS_LOADING:
            return {...state, isLoading: true, errMess: null, lenderpools: []}

        case ActionTypes.LENDERPOOLS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};