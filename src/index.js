import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import store from './store';
import history from './history';
import './index.scss';
import Root from './root';

const el = document.getElementById('root');

render(<Root store={store} history={history} />, el);

if (PROJECT_ENV === 'debug') {
    if (module.hot) {
        module.hot.accept('./root', () => {
            /* eslint-disable global-require */
            const NextRoot = require('./root').default;
            /* eslint-enable global-require */

            render(<NextRoot store={store} history={history} />, el);
        });
    }
}
