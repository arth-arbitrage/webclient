import * as ActionTypes from './ActionTypes';

export const Exchanges = (state = { isLoading: true,
    errMess: null,
    swappools:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SWAPPOOLS:
            return {isLoading: false, errMess: null, swappools: [...state.swappools, action.payload]};

        case ActionTypes.SWAPPOOLS_LOADING:
            return {...state, isLoading: true, errMess: null, swappools: []}

        case ActionTypes.SWAPPOOLS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};