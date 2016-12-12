import config from '../config';

const baseApiPath = `${config.baseApiPath}api`;

const urls = {
    'auth/login': () => `${baseApiPath}/auth/login`,

    'auth/logout': () => `${baseApiPath}/auth/logout`
};

const request = (name, ...args) => urls[name] ? urls[name].apply(undefined, args) : undefined;

export default { request };
