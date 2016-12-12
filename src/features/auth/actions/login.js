import { auth } from '../../../services/api';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/action-types';
import { createAction } from '../../../utilities';

export const request = createAction(LOGIN_REQUEST);
export const success = createAction(LOGIN_SUCCESS);
export const failure = createAction(LOGIN_FAILURE);

export default function () {
    return dispatch => {
        dispatch(request());

        return auth
            .login()
            .then(res => dispatch(success(res.data)))
            .catch(error => dispatch(failure(null, error)));
    };
}
