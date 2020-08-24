import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
class UpdatePasswordPage extends Component {
  state = {
    newPassword: "",
    comfirm: "",
    loading: false,
  };
  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { newPassword, comfirm } = this.state;
    const { firebase, history, firestore, artisan } = this.props;
    if (newPassword === comfirm) {
      var user = firebase.auth().currentUser;

      user
        .updatePassword(newPassword)
        .then(async function () {
          // Update successful.
          // this.setState({ loading: false });
          await firestore.update({ collection: "users", doc: artisan.id }, { isFirstTimelogin: false });
          history.push("/register");
        
        })
        .catch(function (error) {
          // An error happened.
          //this.setState({ loading: false });
          alert(error.message, ":(");
          console.log(error);
        });
    } else {
      alert("passwords do not match");
      this.setState({ loading: false });
    }
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  logout=(e)=>{
    e.preventDefault()
    this.props.firebase.logout()
  }
  render() {
    const { newPassword, comfirm } = this.state;
    return (
      <div>
        <header>
          <nav className="navbar-nav">
            <ul>
              <li className="nav-link">
                <a href="#!" onClick={this.logout}>logout</a>
              </li>
            </ul>
          </nav>
        </header>{" "}
        <div className="login-page">
          <div class="free-quote-form">
            {/* <!-- Heading Main --> */}
            <h1 class="heading-main mb-4">
              <span>Password reset </span>
            </h1>
            {/* <!-- Heading Main --> */}
            {/* {message ? <Alert message={message} messageType={messageType} /> : null} */}
            {/* <!-- Free Quote From --> */}
            <form onSubmit={this.onSubmit}>
              <div class="form-row mb-4">
                <input
                  type="password"
                  onChange={this.onChange}
                  value={newPassword}
                  name="newPassword"
                  class="form-control"
                  placeholder="new password"
                />
              </div>

              <div class="form-row mb-4">
                <input
                  type="password"
                  onChange={this.onChange}
                  value={comfirm}
                  name="comfirm"
                  class="form-control"
                  placeholder="Comfirm new password"
                />
              </div>

              <div class="form-row text-center">
                <button type="submit" class="form-btn mx-auto btn-theme bg-orange">
                  {!this.state.loading ? (
                    <span>
                      Update password <i class="icofont-rounded-right"></i>
                    </span>
                  ) : (
                    <span>Updating...</span>
                  )}
                </button>
              </div>
            </form>
            {/* <!-- Free Quote From --> */}
          </div>
        </div>
      </div>
    );
  }
}

UpdatePasswordPage.propTypes = {
  firebase: PropTypes.object.isRequired,
};
export default compose(
  firestoreConnect((props) => [{ collection: "users", storeAs:"user", doc: props.firebase.auth().currentUser.uid }]),
  firebaseConnect(),
  connect(({ firestore: { ordered } }, props) => ({
    artisan: ordered.user && ordered.user[0],
  }))
)(UpdatePasswordPage);
