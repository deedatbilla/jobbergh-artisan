import React from "react";
import plumber from "../../../images/PLUMBER.png";
import ac from "../../../images/AIRCON copy.png";
import painter from "../../../images/PAINTER.png";
import tv from "../../../images/TV_REPAIRER.png";

const Section1 = () => {
  return (
    <section className="wide-tb-100 pt-0 bg-white home-welcome ">
      <div className="container">
        <div className="row">
        
          <div className="col-md-12 text-left">
            <h3 style={{ zIndex: 4 }}>Popular professional services</h3>
          </div>
        </div>
        <div className="row">
          {/* <!-- Icon Box 7 --> */}
          <div className="col-md-3">
            <div className="icon-box-7">
              <img src={plumber} width={254} height={219} alt="" />
              <h3 className="h3-xs txt-blue">
                PLUMBER
                <br />
              </h3>
              <a href="service-details.html" className="btn-arrow bg-navy-blue">
                <i className="icofont-swoosh-right"></i>
              </a>
            </div>
            {/* <p className="text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p> */}
          </div>

          <div className="col-md-3">
            <div className="icon-box-7">
              <img src={ac} width={254} height={219} alt="" />
              <h3 className="h3-xs txt-blue">
                AIR
                <br />
                CONDITION REPAIRER
              </h3>
              <a href="service-details.html" className="btn-arrow bg-navy-blue">
                <i className="icofont-swoosh-right"></i>
              </a>
            </div>
            {/* <p className="text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p> */}
          </div>

          <div className="col-md-3">
            <div className="icon-box-7">
              <img src={painter} width={254} height={219} alt="" />
              <h3 className="h3-xs txt-blue">
                PAINTER
                <br />
              </h3>
              <a href="service-details.html" className="btn-arrow bg-navy-blue">
                <i className="icofont-swoosh-right"></i>
              </a>
            </div>
            {/* <p className="text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p> */}
          </div>
          {/* <!-- Icon Box 7 --> */}

          {/* <!-- Icon Box 7 --> */}
          <div className="col-md-3">
            <div className="icon-box-7">
              <img src={tv} width={254} height={219} alt="" />
              <h3 className="h3-xs txt-blue">
                Television
                <br />
                Repairer
              </h3>
              <a href="service-details.html" className="btn-arrow bg-navy-blue">
                <i className="icofont-swoosh-right"></i>
              </a>
            </div>
            {/* <p className="text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p> */}
          </div>
          {/* <!-- Icon Box 7 --> */}
        </div>
      </div>
    </section>
  );
};

export default Section1;
