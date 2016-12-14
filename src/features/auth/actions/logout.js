import { LOGIN_LOGOUT } from '../constants/action-types';
import { createAction } from '../../../utilities';
import config from '../../../config';
import history from '../../../history';

const logout = createAction(LOGIN_LOGOUT);

export default function () {
    return dispatch => {
        localStorage.removeItem(config.localStorageTokenKey);
        dispatch(logout());
        history.push('/login');
    };
}
