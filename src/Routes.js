import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import FormPage from "./FormPage";
import App from "./App";
import history from './History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/FormPage" component={FormPage} />
                </Switch>
            </Router>
        )
    }
}
