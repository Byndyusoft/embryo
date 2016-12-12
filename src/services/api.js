import axios from 'axios';
import urls from './urls';

const http = axios.create({
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-control': 'no-cache',
        'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
        Pragma: 'no-cache'
    },

    withCredentials: true
});

export const auth = {
    login() {
        return http.post(urls.request('auth/login'));
    },

    logout() {
        return http.post(urls.request('auth/logout'));
    }
};

export default {
    auth
};
