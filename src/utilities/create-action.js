import identity from './identity';

function isCorrectPayload(value) {
    return Object.keys(value).every(key => key === 'error' || key === 'payload' || key === 'index');
}

export default (type, createPayload = identity) => arg => {
    if (typeof createPayload !== 'function') {
        throw new Error('The createPayload must be a function or undefined');
    }

    if (arg === undefined) {
        return { type };
    }

    const payload = createPayload(arg);

    if (!isCorrectPayload(payload)) {
        throw new Error('The illegal payload format');
    }

    return { type, ...payload };
};
