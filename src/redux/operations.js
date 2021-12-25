import * as ActionTypes from './ActionTypes';

export const Operations= (state = { isEmpty: true,
    errMess: null,
    operations:[]}, action) => {
    switch (action.type) {
        case ActionTypes.OPERATION_INIT:
            return {...state, isEmpty: true, errMess: null, operations: [...state.operations]};

        case ActionTypes.OPERATION_ADD:
            return {...state, isEmpty: false, errMess: null, operations: [...state.operations, action.payload]};
            //arr: [...state.arr, action.newItem]

        case ActionTypes.OPERATION_CLEAR:
            return {...state, isEmpty: true, errMess: null, operations: []}

        case ActionTypes.OPERATION_EXECUTE:
            return {...state, isEmpty: false, errMess: action.payload};

        default:
            return state;
    }
};