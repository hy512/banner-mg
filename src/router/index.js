import React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from '../views/index';
import { Visible } from '../views/visible';
import { Upload } from '../views/upload';
import { Nav } from '../views/nav';

export const AppRouter = () => (
    <Router>
        <div className="panel panel-default">
            <div className="panel-heading">
                <Nav />
            </div>
            <div className="panel-body">
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/visible" component={Visible} />
                    <Route path="/upload" component={Upload} />
                </Switch>
            </div>
        </div>
    </Router>
);