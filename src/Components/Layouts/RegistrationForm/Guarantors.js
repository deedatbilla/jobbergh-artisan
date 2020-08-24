import React, { Component } from "react";
import { stepCounter } from "../../../actions/RegistrationStepCounterAction";
import { connect } from "react-redux";
class Guarantors extends Component {
  state = {
    fullname1: "",
    fullname2: "",
    fullname3: "",
    phone1: "",
    phone2: "",
    phone3: "",
    relationship1: "",
    relationship2: "",
    relationship3: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    console.log(this.props.firebase);
  }
  onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firestore, user, details, history } = this.props;
      const { fullname1, fullname2, fullname3, phone1, phone2, phone3, relationship1, relationship2, relationship3 } = this.state;

      const guarantors = [
        { fullname1, phone1, relationship1 },
        { fullname2, phone2, relationship2 },
        { fullname3, phone3, relationship3 },
      ];

      await firestore.update(
        { collection: "users", doc: user.uid },
        { ...details, guarantors, registrationComplete: true, shop_images: [] }
      );
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  onPreviousClick = () => {
    this.props.stepCounter(3);
  };
  render() {
    const { fullname1, phone1, relationship1, fullname2, phone2, relationship2, fullname3, phone3, relationship3 } = this.state;
    return (
      <div className="card m-2 shadow-lg mb-5 bg-white rounded">
        <div className="card-header bg-orange">
          <div className="col-md-12 text-center ">
            <h3 style={{ color: "#fff" }}>Guarantors</h3>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-4">
                <h4>Guarantor 1</h4>
                <div class="form-group">
                  <label htmlFor="Template type">Full name</label>
                  <input
                    type="text"
                    name="fullname1"
                    value={fullname1}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="Template type">Phone</label>
                  <input
                    type="text"
                    name="phone1"
                    value={phone1}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Phone"
                  />
                </div>

                <div class="form-group">
                  <label htmlFor="Template type">Relationship</label>
                  <input
                    type="text"
                    name="relationship1"
                    value={relationship1}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Relationship"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <h4>Guarantor 2</h4>
                <div class="form-group">
                  <label htmlFor="Template type">Full name</label>
                  <input
                    type="text"
                    name="fullname2"
                    value={fullname2}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="Template type">Phone</label>
                  <input
                    type="text"
                    name="phone2"
                    value={phone2}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Phone"
                  />
                </div>

                <div class="form-group">
                  <label htmlFor="Template type">Relationship</label>
                  <input
                    type="text"
                    name="relationship2"
                    value={relationship2}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Relationship"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <h4>Guarantor 3</h4>
                <div class="form-group">
                  <label htmlFor="Template type">Full name</label>
                  <input
                    type="text"
                    name="fullname3"
                    value={fullname3}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="Template type">Phone</label>
                  <input
                    type="text"
                    name="phone3"
                    value={phone3}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Phone"
                  />
                </div>

                <div class="form-group">
                  <label htmlFor="Template type">Relationship</label>
                  <input
                    type="text"
                    name="relationship3"
                    value={relationship3}
                    required
                    onChange={this.onChange}
                    class="form-control"
                    placeholder="Relationship"
                  />
                </div>
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
                  <i class="icofont-arrow-right"></i> Finish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { stepCounter })(Guarantors);
