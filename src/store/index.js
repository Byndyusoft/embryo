import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

let devTools = f => f;

if (PROJECT_ENV !== 'release') {
    if (window.devToolsExtension) {
        devTools = window.devToolsExtension();
    }
}

const store = createStore(reducer, compose(applyMiddleware(thunk), devTools));

if (PROJECT_ENV === 'debug') {
    if (module.hot) {
        module.hot.accept('../reducer', () => {
            /* eslint-disable global-require */
            const nextReducer = require('../reducer').default;
            /* eslint-enable global-require */

            store.replaceReducer(nextReducer);
        });
    }
}

export default store;
