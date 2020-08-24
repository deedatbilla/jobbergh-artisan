import React, { Component } from "react";
import { stepCounter } from "../../../actions/RegistrationStepCounterAction";
import { connect } from "react-redux";
class Education extends Component {
  state = {
    highest_level_of_education: "",
    institution: "",
    certificate: "",
    services: " ",
    professional_qualification: "",
    years_of_practice: "",
    name_of_pro_institution: "",
    have_shop: "",
    shop_location: "",
    have_criminal_record: "",
    offense: "",
    emergency_contact: "",
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
      const data = {
        ...this.state,
        services: [this.state.services],
      };
      await firestore.update({ collection: "users", doc: user.uid }, { ...details, ...data });
      this.props.stepCounter(4);
    } catch (error) {
      console.log(error);
    }
  };

  onPreviousClick = () => {
    this.props.stepCounter(2);
  };
  render() {
    const {
      name_of_pro_institution,
      professional_qualification,
      services,
      shop_location,
      certificate,
      institution,
      offense,
      emergency_contact,
      have_criminal_record,
      have_shop,
      years_of_practice,
    } = this.state;

    return (
      <div className="card m-2 shadow-lg mb-5 bg-white rounded">
        <div className="card-header bg-orange">
          <div className="col-md-12 text-center ">
            <h3 style={{ color: "#fff" }}>Education</h3>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 form-group input-group-sm">
                  <label htmlFor="Template type" className="form-check-label">
                    What is your highest level of education
                  </label>
                  <div className="row">
                    <div class=" col-md-6 form-check">
                      <label class=" form-check-label" for="radio1">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="highest_level_of_education"
                          value={"none"}
                          onChange={this.onChange}
                        />
                        None
                      </label>
                    </div>
                    <div class=" col-md-6 form-check">
                      <label class="form-check-label" for="radio2">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="highest_level_of_education"
                          value={"primary"}
                          onChange={this.onChange}
                        />
                        Primary
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div class=" col-md-6 form-check">
                      <label class="form-check-label" for="radio3">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="highest_level_of_education"
                          value={"junior_high_school"}
                          onChange={this.onChange}
                        />
                        Junior high school
                      </label>
                    </div>
                    <div class=" col-md-6 form-check">
                      <label class="form-check-label" for="radio4">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="highest_level_of_education"
                          value={"senior_high_school"}
                          onChange={this.onChange}
                        />
                        Senior high school
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div class=" col-md-6 form-check">
                      <label class="form-check-label" for="radio5">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="highest_level_of_education"
                          value={"Bachelor's degree"}
                          onChange={this.onChange}
                        />
                        Bachelor's degree
                      </label>
                    </div>

                    <div class=" col-md-6 form-check">
                      <label class="form-check-label" for="radio6">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="highest_level_of_education"
                          value={"Vocational_school"}
                          onChange={this.onChange}
                        />
                        Vocational school
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 form-group input-group-sm">
                      <label htmlFor="Template type" className="form-check-label">
                        {" "}
                        Other(Specify)
                      </label>
                      <input
                        type="text"
                        name="other"
                        // value=
                        onChange={this.onChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-4 form-group input-group-sm">
                  <label htmlFor="Template type" className="form-check-label">
                    What institution did you acquire your qualification?
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={institution}
                    required
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 form-group input-group-sm">
                  <label htmlFor="Template type" className="form-check-label">
                    {" "}
                    provide certificate (if any)
                  </label>
                  <input type="file" name="certificate" value={certificate} onChange={this.onChange} className="form-control" />
                </div>
                <div className="col-md-4 form-group input-group-sm">
                  <label htmlFor="Template type" className="form-check-label">
                    What service do u wish to provide
                  </label>
                  <select name="services" value={services} required onChange={this.onChange} className="form-control">
                    <option value="">---Select a service---</option>
                    {this.props.services.map((data) => (
                      <option key={data.id} value={data.name}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 form-group input-group-sm">
                  <label htmlFor="Template type" className="form-check-label">
                    {" "}
                    How long have you been practicing this profession? (years)
                  </label>
                  <input
                    type="number"
                    name="years_of_practice"
                    value={years_of_practice}
                    onChange={this.onChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 form-group input-group-sm">
                  <label htmlFor="Template type" className="form-check-label">
                    Do you have a professional qualification for your profession?
                  </label>
                  <div className="row">
                    <div class=" col-md-6 form-check">
                      <label class=" form-check-label" for="radio1">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="professional_qualification"
                          value={"yes"}
                          required
                          onChange={this.onChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div class=" col-md-6 form-check">
                      <label class="form-check-label" for="radio2">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="professional_qualification"
                          value={"no"}
                          required
                          onChange={this.onChange}
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {professional_qualification === "yes" ? (
                  <div className="col-md-4 form-group input-group-sm">
                    <label htmlFor="Template type" className="form-check-label">
                      Which institution provided you with the professional certificate
                    </label>
                    <input
                      type="text"
                      name="name_of_pro_institution"
                      value={name_of_pro_institution}
                      required
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>
                ) : null}

                <div className="col-md-4 form-group input-group-sm">
                  <label htmlFor="Template type" className="form-check-label">
                    Do you have a shop for your job?
                  </label>
                  <div className="row">
                    <div class=" col-md-6 form-check">
                      <label class="form-check-label" for="radio1">
                        <input type="radio" class="form-check-input" name="have_shop" value={"yes"} onChange={this.onChange} />
                        Yes
                      </label>
                    </div>
                    <div class=" col-md-6 form-check">
                      <label class="form-check-label" for="radio2">
                        <input type="radio" class="form-check-input" name="have_shop" value={"no"} onChange={this.onChange} />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {have_shop === "yes" ? (
                  <div className="col-md-4 form-group input-group-sm">
                    <label htmlFor="Template type" className="form-check-label">
                      {" "}
                      Where is the shop located (desribe with landmark)
                    </label>
                    <textarea
                      type="number"
                      name="shop_location"
                      rows={5}
                      value={shop_location}
                      required
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>
                ) : null}

                <div className="col-md-4 form-group input-group-sm">
                  <label htmlFor="Template type" className="form-check-label">
                    Do you have any criminal record?
                  </label>
                  <div className="row">
                    <div class=" col-md-6 form-check">
                      <label class=" form-check-label" for="radio1">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="have_criminal_record"
                          value={"yes"}
                          required
                          onChange={this.onChange}
                        />
                        Yes
                      </label>
                    </div>
                    <div class=" col-md-6 form-check">
                      <label class="form-check-label" for="radio2">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="have_criminal_record"
                          value={"no"}
                          required
                          onChange={this.onChange}
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {have_criminal_record === "yes" ? (
                  <div className="col-md-4 form-group input-group-sm">
                    <label htmlFor="Template type" className="form-check-label">
                      {" "}
                      what was the offense?
                    </label>
                    <textarea
                      type="number"
                      name="offense"
                      rows={5}
                      value={offense}
                      required
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>
                ) : null}

                <div className="col-md-4 form-group input-group-sm">
                  <label htmlFor="Template type" className="form-check-label">
                    In case of emergency who do we contact
                  </label>
                  <input
                    type="text"
                    name="emergency_contact"
                    value={emergency_contact}
                    onChange={this.onChange}
                    className="form-control"
                    required
                    placeholder="Emergency contact"
                  />
                </div>
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
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { stepCounter })(Education);
