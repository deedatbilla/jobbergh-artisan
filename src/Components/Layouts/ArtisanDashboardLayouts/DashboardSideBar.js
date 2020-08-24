import React, { Component } from "react";
import logo from "../../../images/900-darren2x.png";
// import userlogo from "../../assets/userlogo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class DashboardSideBar extends Component {
  state = {
    isAuthenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  onLogoutClick = (e) => {
    e.preventDefault();

    const { firebase } = this.props;
    firebase.logout();
  };
  render() {
    const { isAuthenticated } = this.state;
    const { auth } = this.props;
    return (
      <aside className="main-sidebar sidebar-light-primary">
        {/* <!-- Brand Logo --> */}
        <a href="index3.html" className="brand-link">
          {/* <img
            src={logo}
            width={90}
            height={90}
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: "0.8" }}
          /> */}
          <span className="brand-text font-weight-light">Jobbergh</span>
        </a>

        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          {/* <!-- Sidebar user panel (optional) --> */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={logo} width={90} height={90} className="img-circle elevation-2" alt="User Image" /> 
               {/* <i className="nav-icon fa fa-user img-circle elevation-2" width={90} height={90} ></i> */}
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Welcome, {auth.displayName}
              </a>
            </div>
          </div>

          {/* <!-- SidebarSearch Form --> */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fa fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar ">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fa fa-home"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">
                  <i className="nav-icon fa fa-file"></i>
                  <p>Portfolio</p>
                </Link>
                
              </li>
              <li className="nav-item">
              <Link to="/requested-services" className="nav-link">
                  <i className="nav-icon fa fa-tasks"></i>
                  <p>Requested services</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/edit-profile" className="nav-link">
                  <i className="nav-icon fa fa-user"></i>
                  <p>Edit profile</p>
                </Link>
              </li>

              

              <li className="nav-item">
                <a href="#!" className="nav-link" onClick={this.onLogoutClick}>
                  <i className="nav-icon fa fa-sign-out"></i>
                  <p>Sign out</p>
                </a>
              </li>


              
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>
    );
  }
}

DashboardSideBar.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
  }))
)(DashboardSideBar);
