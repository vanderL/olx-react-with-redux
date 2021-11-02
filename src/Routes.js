import React from 'react';
import { Switch } from 'react-router-dom';
import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import AdPage from './pages/AdPage';

export const Routes = () => {
    return (
        <Switch>
            <RouteHandler path="/" exact component={Home} />
            <RouteHandler path="/about" exact component={About} />
            <RouteHandler path="/login" exact component={Login} />
            <RouteHandler path="/signup" exact component={SignUp} />
            <RouteHandler path="/ad/:id" component={AdPage} />
            <RouteHandler path="/post-an-ad" component={About} isPrivate/>
            <RouteHandler component={NotFound} />
        </Switch>
    )
}