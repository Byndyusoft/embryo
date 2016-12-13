import jwtDecode from 'jwt-decode';
import * as types from './constants/action-types';
import { createReducer, nextState } from '../../utilities';
import localStorageTokenKey from '../../config';

let user;
const token = localStorage.getItem(localStorageTokenKey);

if (token !== null) {
    try {
        user = jwtDecode(token);
    } catch (err) {
        user = { isAuthenticated: false, username: '', role: '' };
    }
}

const initialState = { ...user, isPending: false, error: '' };

export const actions = {
    [types.LOGIN_REQUEST]: state => {
        return nextState(state, { isPending: true, isAuthenticated: false });
    },

    [types.LOGIN_SUCCESS]: (state, action) => {
        return nextState(state, { isPending: false, isAuthenticated: true, ...action.payload });
    },

    [types.LOGIN_FAILURE]: (state, action) => {
        return nextState(state, { isPending: false, isAuthenticated: false, error: action.error });
    },

    [types.LOGIN_LOGOUT]: () => {
        return { ...initialState };
    }
};

export default createReducer(initialState, actions);
