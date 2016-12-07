import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

let devTools = f => f;

if (PROJECT_ENV !== 'release') {
    if (window.devToolsExtension) {
        devTools = window.devToolsExtension();
    }
}

export default createStore(reducer, compose(applyMiddleware(thunk), devTools));
