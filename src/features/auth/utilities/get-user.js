import jwtDecode from 'jwt-decode';
import localStorageTokenKey from '../../../config';

export default function () {
    const token = localStorage.getItem(localStorageTokenKey);
    let user = null;

    if (token !== null) {
        try {
            user = jwtDecode(token);
        } catch (err) { }
    }

    return user;
}
