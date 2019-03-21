import React from 'react';
import {Route} from 'react-router-dom';
const PrivateRoute = ({component: Component}, auth, ...others)(
    <Route />
);