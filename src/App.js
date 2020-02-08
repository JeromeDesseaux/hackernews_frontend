import React from 'react';
import './App.css';
// import { Route, IndexRoute } from 'react-router-dom';
import { Switch } from 'react-router';
import { BrowserRouter } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import SideLayout from "./components/layouts/SideLayout";
// import AppRoute from "./middlewares/AppRoute";
import { ProtectedRoute, PrivateRoute } from "./middlewares/ProtectedRoute"

import Login from "./pages/Login";
import Register from "./pages/Register";
import NewsFeed from "./pages/NewsFeed";


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/" layout={MainLayout} component={NewsFeed} />
          <PrivateRoute path="/login" layout={SideLayout} component={Login} />
          <PrivateRoute path="/register" layout={SideLayout} component={Register} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
