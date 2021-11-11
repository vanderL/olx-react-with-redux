import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../helpers/AuthHandler';

export default ({ component: Component, isPrivate, ...rest }) => {
    let logged = isLogged();
    let authorized = (isPrivate && !logged) ? false : true;

    if(!authorized) return <Redirect to="/login" />;
    
    return (
        <Route 
            {...rest}
            render={props => <Component {...rest}/>}
        />
    )
}