import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { store, rrfProps } from "./store";
import HomePage from "./Pages";
import UpdatePasswordPage from './Pages/Artisan/UpdatePasswordPage';
import LoginPage from './Pages/Artisan/ArtisanLoginPage';
import Dashboard from './Pages/Artisan/Dashboard';
import ArtisanRegistrationPage from './Pages/Artisan/ArtisanRegistrationPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from './Pages/Artisan/Portfolio';
import "./css/base.css";
import "./rev-slider/revolution/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css";
import "./rev-slider/revolution/fonts/font-awesome/css/font-awesome.css";
import "./rev-slider/revolution/css/settings.css";
import "./rev-slider/revolution/css/layers.css";
import "./rev-slider/revolution/css/navigation.css";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/summernote/summernote-bs4.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "admin-lte/plugins/chart.js/Chart.min.js";
import "admin-lte/plugins/moment/moment.min.js";
import "admin-lte/plugins/jquery-ui/jquery-ui.min.js";
import "admin-lte/dist/js/pages/dashboard.js";
import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/dist/js/adminlte.js";
import ArtisanRootComponent from './Pages/Artisan/ArtisanRootComponent';

import NotFound from './Pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div className="App">
         <ArtisanRootComponent/>
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
