import React, { Component } from "react";
import UpdatePasswordPage from "./UpdatePasswordPage";
import LoginPage from "./ArtisanLoginPage";
import Dashboard from "./Dashboard";
import ArtisanRegistrationPage from "./ArtisanRegistrationPage";
import Portfolio from './Portfolio';
import { UserIsAuthenticated, UserIsNotAuthenticated } from "../../helpers/ArtisanAuthHelper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RequestedServices from './RequestedServices';
class ArtisanRootComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch >
            <Route exact path="/" component={UserIsNotAuthenticated(LoginPage)} />
            <Route exact path="/register" component={UserIsAuthenticated(ArtisanRegistrationPage)} />
            <Route exact path="/dashboard" component={UserIsAuthenticated(Dashboard)} />
            <Route exact path="/password-reset" component={UserIsAuthenticated(UpdatePasswordPage)} />
            <Route exact path="/portfolio" component={UserIsAuthenticated(Portfolio)} />
            <Route exact path="/requested-services" component={UserIsAuthenticated(RequestedServices)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default ArtisanRootComponent;
