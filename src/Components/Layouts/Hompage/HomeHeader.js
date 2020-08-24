import React from "react";
import {Link} from 'react-router-dom';

const HomeHeader = () => {
  return (
    <header class="top-border top-transparent wow fadeInDown header-logo-top">
      <div class="top-bar-right d-flex align-items-center text-md-left">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-2 d-flex col-6">
              <a class="navbar-brand" href="index.html">
                {/* <img src="images/logo_footer.png" alt="" /> */}
                <h3>Jobbergh</h3>
              </a>
            </div>
            <div class="col-auto ml-auto pr-sm-0">
              <div class="d-inline-flex">
                <div class="top-text">
                  <small class="txt-ligt-gray">Address</small>
                  <span class="fw-7 txt-blue">Olympics Street 101, Caprice, Accra-Ghana</span>
                </div>
                <div class="top-text">
                  <small class="txt-ligt-gray">Emaii Us</small>
                  <span class="fw-6 txt-blue">
                    <a href="#" class="txt-blue">
                    info@localskilledworkersgh.com
                    </a>
                  </span>
                </div>

                
                <div class="top-text">
                  <small class="txt-ligt-gray">Phone Number</small>
                  <span class="fw-7 txt-blue">+233 55 1844848</span>
                </div>

                <div class="top-text">
                  <small class="txt-ligt-gray">Digital Address</small>
                  <span class="fw-7 txt-blue">GA-097-7672</span>
                </div>

                {/* <!-- Topbar Language Dropdown Start --> */}
                <div class="dropdown d-inline-flex lang-toggle shadow-sm order-lg-last">
                  {/* <a
                    href="#"
                    class="dropdown-toggle btn"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-hover="dropdown"
                    data-animations="slideInUp slideInUp slideInUp slideInUp"
                  >
                    <img src="images/us.svg" alt="" class="dropdown-item-icon" />
                    <span class="d-inline-block d-lg-none">US</span>
                    <span class="d-none d-lg-inline-block">United States</span> <i class="icofont-rounded-down"></i>
                  </a> */}
                  <div class="dropdown-menu dropdownhover-bottom dropdown-menu-right" role="menu">
                    <a class="dropdown-item active" href="#">
                      English
                    </a>
                    {/* <a class="dropdown-item" href="#">
                      Deutsch
                    </a>
                    <a class="dropdown-item" href="#">
                      Español&lrm;
                    </a> */}
                  </div>
                </div>
                {/* <!-- Topbar Language Dropdown End -->         */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main Navigation Start --> */}
      {/* <!-- Main Navigation Start --> */}
      <nav class="navbar navbar-expand-lg bg-transparent header-fullpage">
        <div class="container text-nowrap bdr-nav px-0">
          <span class="order-lg-last d-inline-flex request-btn">
            <a class="nav-link mr-2 ml-auto" href="#" id="search_home">
              <i class="icofont-search"></i>
            </a>
          </span>

          <div class="d-inline-flex request-btn ml-2 order-lg-last">
            <Link to="/client/login"
              class="btn-theme icon-left bg-orange no-shadow  d-lg-inline-block align-self-center"
              href="#!"
            //   role="button"
            //   data-toggle="modal"
            //   data-target="#request_popup"
            >
              <i class="icofont-login"></i> Login
            </Link>
          </div>
          {/* <!-- Topbar Request Quote Start --> */}

          {/* <!-- Toggle Button Start --> */}
          <button
            class="navbar-toggler x collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          {/* <!-- Toggle Button End --> */}

          {/* <!-- Topbar Request Quote End --> */}

          <div
            class="collapse navbar-collapse"
            id="navbarCollapse"
            data-hover="dropdown"
            data-animations="slideInUp slideInUp slideInUp slideInUp"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle-mob"
                  href="index.html"
                  id="dropdown03"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
              
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link" href="services.html">
                  Services
                </a>
              </li>
             
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle-mob"
                  href="index.html"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact 
                </a>
               
              </li>
            </ul>
            {/* <!-- Main Navigation End --> */}
          </div>
        </div>
      </nav>
      {/* <!-- Main Navigation End --> */}
      {/* <!-- Main Navigation End --> */}
    </header>
  );
};

export default HomeHeader;
