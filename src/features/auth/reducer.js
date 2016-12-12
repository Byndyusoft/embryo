import * as types from './constants/action-types';
import { createReducer, nextState } from '../../utilities';

const initialState = {
    isPending: false,
    isAuthorized: false,
    username: '',
    role: '',
    error: ''
};

const actions = {
    [types.LOGIN_REQUEST]: state => {
        return nextState(state, { isPending: true });
    },

    [types.LOGIN_SUCCESS]: (state, action) => {
        return nextState(state, action.payload);
    },

    [types.LOGIN_FAILURE]: (state, action) => {
        return nextState(state, action.payload);
    },

    [types.LOGIN_LOGOUT]: () => {
        return { ...initialState };
    }
};

export default createReducer(initialState, actions);
