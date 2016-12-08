import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import history from './history';
import './index.scss';

const root = document.getElementById('root');

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    root
);
