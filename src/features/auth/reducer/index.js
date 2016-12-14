import * as types from '../constants/action-types';
import { createReducer, nextState } from '../../../utilities';
import getUser from '../utilities/get-user';

const defaultUser = { isAuthenticated: false, username: '', role: '' };
const initialState = { ...(getUser() || defaultUser), isPending: false, error: '' };

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
