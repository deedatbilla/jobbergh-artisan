import React, { Component } from "react";
import Spinner from "../Common/Spinner";
import { stepCounter } from "../../../actions/RegistrationStepCounterAction";
import { connect } from "react-redux";
class PersonalInfo2 extends Component {
  state = {
    nok: "",
    next_of_kin_phone: "",
    idType: "",
    idnumber: "",
    date_of_issue: "",
    date_of_expiry: "",
    phone_number: "",
    spouse_number:"",
    email: "",
    Ga: "",
    Ewe: "",
    bank_account_type: "",
    English: "",
    French: "",
    Twi: "",
    bank_name: "",
    bank_branch: "",
    bank_account_number: "",
    g_wallet_number: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    // this.props.stepCounter(3);
    const { details } = this.props;
    this.setState({ ...details });
    console.log(details);
  }
  onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firestore, user, details } = this.props;
      const { Ga, English, Ewe, French, Twi } = this.state;

      const data = {
        ...this.state,
        Ga: "",
        Ewe: "",
        English: "",
        French: "",
        Twi: "",
        languages: [Ga, English, Ewe, French, Twi],
      };
      delete data.English;
      delete data.Ewe;
      delete data.French;
      delete data.Ga;
      delete data.Twi;
      const final = {
        ...data,
      };
      await firestore.update({ collection: "users", doc: user.uid }, { ...final, ...details });
      this.props.stepCounter(3);
    } catch (error) {
      console.log(error);
    }
  };

  onPreviousClick = () => {
    this.props.stepCounter(1);
  };
  render() {
    const {
      nok,
      next_of_kin_phone,
      idType,
      idnumber,
      date_of_issue,
      date_of_expiry,
      phone_number,
      email,
      Ga,
      spouse_number,
      Ewe,
      bank_account_type,
      English,
      French,
      Twi,
      bank_name,
      bank_branch,
      bank_account_number,
      g_wallet_number,
    } = this.state;
    if (this.props.details) {
      return (
        <div className="card m-2 shadow-lg mb-5 bg-white rounded">
          <div className="card-header bg-orange">
            <div className="col-md-12 text-center">
              <h3 style={{ color: "#fff" }}>Personal Information</h3>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="row p-3"></div>

              <div className="row">
                <div class="form-row mb-4 col-md-4">
                  <label htmlFor="Template type">Next of kin</label>
                  <input
                    type="text"
                    name="nok"
                    value={nok}
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Next of kin (optional)"
                  />
                </div>{" "}
                <div class="form-row mb-4 col-md-4">
                  <label htmlFor="Template type">Next of kin Phone number</label>
                  <input
                    type="text"
                    name="next_of_kin_phone"
                    value={next_of_kin_phone}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Next of kin Phone number"
                  />
                </div>
                {this.props.details.marital_status === "married" ? (
                  <div class="form-row mb-4 col-md-4">
                    <label htmlFor="Template type">Spouse Phone number</label>
                    <input
                      type="text"
                      name="spouse_number"
                      value={spouse_number}
                      onChange={this.onChange}
                      class="form-control"
                      placeholder="Spouse phone number"
                    />
                  </div>
                ) : null}
              </div>

              <div className="row">
                <div class="form-row mb-4 col-md-3">
                  <label htmlFor="Template type">Type of identificaion</label>
                  <select
                    type="text"
                    name="idType"
                    value={idType}
                    required
                    onChange={this.onChange}
                    class="form-control"
                  >
                    <option value="" selected>
                      ---select ID type---
                    </option>
                    <option value="Voter's ID">Voter's ID</option>
                    <option value="National ID">National ID</option>
                    <option value="Passport">Passport</option>
                    <option value="Driver's License">Driver's License</option>
                  </select>
                </div>
                <div class="form-row mb-4 col-md-3">
                  <label htmlFor="Template type">ID number</label>
                  <input
                    type="text"
                    name="idnumber"
                    value={idnumber}
                    onChange={this.onChange}
                    class="form-control"
                    required
                    placeholder="ID Number"
                  />
                </div>
                <div class="form-row mb-4 col-md-3">
                  <label htmlFor="Template type">Date of issue</label>
                  <input
                    type="date"
                    name="date_of_issue"
                    value={date_of_issue}
                    onChange={this.onChange}
                    class="form-control"
                    required
                    placeholder="Data of issue"
                  />
                </div>
                <div class="form-row mb-4 col-md-3">
                  <label htmlFor="Template type">Date of Expiry</label>
                  <input
                    type="date"
                    name="date_of_expiry"
                    value={date_of_expiry}
                    onChange={this.onChange}
                    class="form-control"
                    required
                    placeholder="Date of expiry"
                  />
                </div>
              </div>

              <div className="row">
                <div class="form-row mb-4 col-md-3">
                  <label htmlFor="Template type">Phone number</label>
                  <input
                    type="text"
                    name="phone_number"
                    value={phone_number}
                    onChange={this.onChange}
                    class="form-control"
                    required
                    placeholder="Phone Number"
                  />
                </div>
                <div class="form-row mb-4 col-md-3">
                  <label htmlFor="Template type">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div class="form-row mb-4 col-md-6">
                  <label htmlFor="Template type">What languages do you speak</label>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 form-check">
                        <label htmlFor="Template type" className="form-check-label">
                          <input
                            type="checkbox"
                            name="English"
                            value="English"
                            onChange={this.onChange}
                            class="form-check-input"
                          />
                          English
                        </label>
                      </div>
                      <div className=" col-md-4 form-check">
                        <label htmlFor="french" className="form-check-label">
                          <input
                            type="checkbox"
                            name="French"
                            value="French"
                            onChange={this.onChange}
                            className="form-check-input"
                          />
                          French
                        </label>
                      </div>
                      <div className="col-md-4 form-check">
                        <label htmlFor="Template type" className="form-check-label">
                          <input type="checkbox" name="Twi" value="Twi" onChange={this.onChange} className="form-check-input" />
                          Twi
                        </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 form-check">
                        <label htmlFor="Template type" className="form-check-label">
                          <input type="checkbox" name="Ga" value="Ga" onChange={this.onChange} className="form-check-input" />
                          Ga
                        </label>
                      </div>
                      <div className="col-md-4 form-check">
                        <label htmlFor="Template type" className="form-check-label">
                          <input
                            type="checkbox"
                            name="Ewe"
                            value="Ewe"
                            onChange={this.onChange}
                            className="form-check-input"
                            placeholder="Email"
                          />
                          Ewe
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div class="form-row mb-4 col-md-3">
                  <label htmlFor="Template type">Select account type</label>
                  <select
                    type="text"
                    name="bank_account_type"
                    value={bank_account_type}
                    onChange={this.onChange}
                    class="form-control"
                  >
                    <option selected>---select account type---</option>
                    <option value="Gmoney">Gmoney</option>
                    <option value="Bank Account">Bank Account</option>
                  </select>
                </div>
                {bank_account_type === "Bank Account" ? (
                  <React.Fragment>
                    <div class="form-row mb-4 col-md-3">
                      <label htmlFor="Template type">Bank name </label>
                      <input
                        type="text"
                        name="bank_name"
                        value={bank_name}
                        onChange={this.onChange}
                        class="form-control"
                        placeholder="Bank name"
                      />
                    </div>
                    <div class="form-row mb-4 col-md-3">
                      <label htmlFor="Template type">Bank Branch</label>
                      <input
                        type="text"
                        name="bank_branch"
                        value={bank_branch}
                        onChange={this.onChange}
                        class="form-control"
                        placeholder="Bank Branch"
                      />
                    </div>

                    <div class="form-row mb-4 col-md-3">
                      <label htmlFor="Template type">Bank account number</label>
                      <input
                        type="text"
                        name="bank_account_number"
                        value={bank_account_number}
                        onChange={this.onChange}
                        class="form-control"
                        placeholder="Bank account number"
                      />
                    </div>
                  </React.Fragment>
                ) : bank_account_type === "Gmoney" ? (
                  <div class="form-row mb-4 col-md-3">
                    <label htmlFor="Template type">G-money wallet number</label>
                    <input
                      type="number"
                      name="g_wallet_number"
                      value={g_wallet_number}
                      required
                      onChange={this.onChange}
                      class="form-control"
                      placeholder="G-money wallet number"
                    />
                  </div>
                ) : null}
              </div>

              <div className="row ">
                <div class="d-inline-flex request-btn ml-2 order-lg-last">
                  <button
                    onClick={this.onPreviousClick}
                    class="btn-theme icon-left bg-orange no-shadow  d-lg-inline-block align-self-center"
                  >
                    <i class="icofont-arrow-left"></i> Previous
                  </button>
                </div>

                <div class="d-inline-flex request-btn ml-2 order-lg-last ">
                  <button type="submit" class="btn-theme icon-left bg-orange no-shadow  d-lg-inline-block align-self-center">
                    <i class="icofont-arrow-right"></i> Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default connect(null, { stepCounter })(PersonalInfo2);
