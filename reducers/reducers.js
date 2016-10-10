


import * as types from '../actions/types';

const initialState = {
    loading: true,
    result:'jhdajsh',
};

export default function sub(state = initialState, action) {
    switch (action.type) {
        case types.ON_SUBMIT:
            return Object.assign({}, state, {
                loading: true,
            });
        case types.RECEIVE_SUBMIT:
            return Object.assign({}, state, {
                loading: false,
                result: action.result
            });
        default:
            return state;
    }
}