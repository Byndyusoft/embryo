import { auth } from '../../../services/api';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/action-types';
import { createAction } from '../../../utilities';
import history from '../../../history';

export const request = createAction(LOGIN_REQUEST);
export const success = createAction(LOGIN_SUCCESS, value => {
    history.push(value.redirect);

    return { payload: value.response };
});
export const failure = createAction(LOGIN_FAILURE);

export default function (user, redirect) {
    return dispatch => {
        dispatch(request());

        return auth
            .login(user)
            .then(res => dispatch(success({ response: res.data, redirect })))
            .catch(error => dispatch(failure({ error })));
    };
}
