import React from 'react';
import { Route, IndexRoute } from 'react-router';
import DefaultLayout from './layouts/default';
import Home from './features/home';
import About from './features/about';
import Sample from './features/sample';
import NotFound from './features/not-found';

export default (
    <Route path="/" component={DefaultLayout}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="sample/:id(/:optional)" component={Sample} />
        <Route path="*" component={NotFound} />
    </Route>
);
