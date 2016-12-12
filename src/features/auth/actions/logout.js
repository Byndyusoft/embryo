import { auth } from '../../../services/api';
import { LOGIN_LOGOUT } from '../constants/action-types';
import { createAction } from '../../../utilities';

export const request = createAction(LOGIN_LOGOUT);

export default function () {
    return dispatch => {
        dispatch(request());

        return auth.login();
    };
}
