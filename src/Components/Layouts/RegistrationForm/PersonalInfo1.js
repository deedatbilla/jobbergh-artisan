import React, { Component } from "react";
import { stepCounter } from "../../../actions/RegistrationStepCounterAction";
import { connect } from "react-redux";

class PersonalInfo1 extends Component {
  state = {
    fname: "",
    mname: "",
    lname: "",
    date_of_birth: "",
    formername: "",
    city: "",
    area: "",
    long: "",
    digital_address: "",
    residential_addr: "",
    postal_address: "",
    marital_status: "",
    number_of_children: "",
    region: "",
  };
  onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firestore, user, details } = this.props;
      await firestore.update({ collection: "users", doc: user.uid }, { ...details, ...this.state });
      this.props.stepCounter(2);
    } catch (error) {
      console.log(error);
    }
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    //  this.props.stepCounter(4);
    const { details } = this.props;
    this.setState({ ...details });
    console.log(details);
  }
  render() {
    const {
      fname,
      formername,
      digital_address,
      date_of_birth,
      lname,
      city,
      area,
      long,
      postal_address,
      region,
      residential_addr,
      number_of_children,
      marital_status,
      mname,
    } = this.state;
    return (
      <div className="card m-2 shadow-lg mb-5 bg-white rounded">
        <div className="card-header bg-orange">
          <div className="col-md-12 text-center">
            <h3 style={{ color: "#fff" }}>Service provider registration form</h3>
            <h3 style={{ color: "#fff" }}>Personal Information</h3>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="row p-3">
              <div class="form-row mb-4 col-md-3">
                <label htmlFor="Template type">First name</label>
                <input
                  type="text"
                  name="fname"
                  value={fname}
                  required
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="form-row mb-4 col-md-3">
                <label htmlFor="Template type">Middle name</label>
                <input
                  type="text"
                  name="mname"
                  value={mname}
                  required
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="Middle name"
                />
              </div>
              <div class="form-row mb-4 col-md-3">
                <label htmlFor="Template type">Last name</label>
                <input
                  type="text"
                  name="lname"
                  value={lname}
                  required
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
              <div class="form-row mb-4 col-md-3">
                <label htmlFor="Template type">Date of birth</label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={date_of_birth}
                  required
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="Date of birth"
                />
              </div>
            </div>

            <div className="row">
              <div class="form-row mb-4 col-md-4">
                <label htmlFor="Template type">Former name (Optional)</label>
                <input
                  type="text"
                  name="formername"
                  value={formername}
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="Former name (Optional)"
                />
              </div>{" "}
              <div class="form-row mb-4 col-md-4">
                <label htmlFor="Template type">Region of residence</label>
                <select value={region} name="region" required onChange={this.onChange} class="form-control">
                  <option value="">---select region ---</option>
                  <option value="Oti Region - Dambai">Oti Region - Dambai</option>
                  <option value="Bono East Region - Techiman">Bono East Region - Techiman</option>
                  <option value="Ahafo Region - Goaso<">Ahafo Region - Goaso</option>
                  <option value="Bono Region - Sunyani">Bono Region - Sunyani</option>
                  <option value="North East Region - Nalerigu">North East Region - Nalerigu</option>
                  <option value="Savannah Region - Damango">Savannah Region - Damango</option>
                  <option value="Western North Region- Sefwi Wiawso">Western North Region- Sefwi Wiawso</option>
                  <option value="Western Region - Sekondi">Western Region - Sekondi</option>
                  <option value="Volta Region - Ho">Volta Region - Ho</option>
                  <option value="Greater Accra Region - Accra">Greater Accra Region - Accra</option>
                  <option value="Eastern Region - Koforidua">Eastern Region - Koforidua</option>
                  <option value="Ashanti Region - Kumasi">Ashanti Region - Kumasi</option>
                  <option value="Central Region - Cape Coast">Central Region - Cape Coast</option>
                  <option value="Northern Region - Tamale">Northern Region - Tamale</option>
                  <option value="Upper East Region - Bolgatanga">Upper East Region - Bolgatanga</option>
                  <option value="Upper West Region - Wa">Upper West Region - Wa</option>
                </select>
              </div>
              <div class="form-row mb-4 col-md-4">
                <label htmlFor="Template type">City</label>
                <input type="text" name="city" value={city} onChange={this.onChange} class="form-control" placeholder="City" />
              </div>
            </div>

            <div className="row">
              <div class="form-row mb-4 col-md-3">
                <label htmlFor="Template type">Suburb/Area of residence</label>
                <input
                  type="text"
                  name="area"
                  value={area}
                  required
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="Area of residence"
                />
              </div>
              <div class="form-row mb-4 col-md-3">
                <label htmlFor="Template type">How long have you been living in your area</label>
                <input type="text" name="long" value={long} onChange={this.onChange} class="form-control" placeholder="" />
              </div>
              <div class="form-row mb-4 col-md-3">
                <label htmlFor="Template type">Digital address</label>
                <input
                  type="text"
                  name="digital_address"
                  value={digital_address}
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="Digital address"
                />
              </div>
              <div class="form-row mb-4 col-md-3">
                <label htmlFor="Template type">Residential address</label>
                <input
                  type="text"
                  name="residential_addr"
                  value={residential_addr}
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="Residential address"
                />
              </div>
            </div>

            <div className="row">
              <div class="form-row mb-4 col-md-4">
                <label htmlFor="Template type">Postal address</label>
                <input
                  type="text"
                  name="postal_address"
                  value={postal_address}
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="Postal address"
                />
              </div>{" "}
              <div class="form-row mb-4 col-md-4">
                <label htmlFor="Template type">Marital status</label>
                <select name="marital_status" value={marital_status} required onChange={this.onChange} class="form-control">
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorsed">Divorsed</option>
                  <option value="separated">Separated</option>
                </select>
              </div>
              <div class="form-row mb-4 col-md-4">
                <label htmlFor="Template type">How many children do you have (Optional)</label>
                <input
                  type="number"
                  name="number_of_children"
                  value={number_of_children}
                  onChange={this.onChange}
                  class="form-control"
                  placeholder="Number of children (optional)"
                />
              </div>
            </div>

            <div className="row float-right">
              <div class="d-inline-flex request-btn ml-2 order-lg-last">
                <button type="submit" class="btn-theme icon-left bg-orange no-shadow  d-lg-inline-block align-self-center">
                  <i class="icofont-arrow-right"></i> Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { stepCounter })(PersonalInfo1);
