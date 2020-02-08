import React from "react";
import { Route, Redirect } from "react-router-dom";
import AppRoute from "./AppRoute";
import _ from "lodash";
import { isLoggedIn } from "../utils/helpers";

const ProtectedRoute = ({ ...props }) => {
    let loggedIn = isLoggedIn();
    return loggedIn ? <AppRoute { ...props } /> : <Redirect to="/login" />
}

const PrivateRoute = ({ ...props }) => {
    let loggedIn = isLoggedIn();
    return loggedIn ? <Redirect to="/" /> : <AppRoute { ...props } />
}



export { ProtectedRoute, PrivateRoute };