import React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from '../views/index';
import { Visible } from '../views/visible';
import { Upload } from '../views/upload';

export const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/visible" component={Visible} />
            <Route path="/upload" component={Upload} />
        </Switch>
    </Router>
);