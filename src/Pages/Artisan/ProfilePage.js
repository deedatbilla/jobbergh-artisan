import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import DashBoardHeader from "../../Components/Layouts/ArtisanDashboardLayouts/DashBoardHeader";
import ProfileContent from "../../Components/Layouts/ArtisanDashboardLayouts/ProfileContent";
import DashboardSideBar from "../../Components/Layouts/ArtisanDashboardLayouts/DashboardSideBar";
import Spinner from "../../Components/Layouts/Common/Spinner";
class ProfilePage extends Component {
  logout = () => {
    const { firebase } = this.props;
    firebase.logout();
  };
  state = {
    email: "",
    name: "",
    newpass: "",
    confirm: "",
    oldpass: "",
    file: "",
  };
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { email: auth.email, name: auth.displayName };
    }
    return null;
  }
  componentDidMount() {
    const user = this.props.firebase.auth().currentUser;
    // this.setState({ email: user.email, name: user.displayName });
    // console.log(this.state);
  }
  onSubmit = async (e) => {
    e.preventDefault();

    const user = this.props.firebase.auth().currentUser;

    const { email, name, newpass, confirm, oldpass, photoURL } = this.state;
    const signInMethod = await this.props.firebase.auth().fetchSignInMethodsForEmail(email);
    // console.log(signInMethod, this.props.firebase.auth());
    if (newpass && confirm) {
      if (newpass === confirm) {
        if (signInMethod[0] === "google.com") {
          this.props.firebase
            .auth()
            .currentUser.reauthenticateWithPopup(new this.props.firebase.auth.GoogleAuthProvider())
            .then((userCredential) => {
              // You can now update the user password:
              user
                .updatePassword(newpass)
                .then((data) => {
                  // Update successful.
                  console.log("nice");
                })
                .catch((error) => {
                  // An error happened.
                  console.log(error.message, "failed to update password");
                });
            })
            .catch(function (error) {
              // Credential mismatch or some other error.
              console.log(error.message, "failed to update password");
            });
        } else {
          const credential = this.props.firebase.auth.EmailAuthProvider.credential(user.email, oldpass);
          user
            .reauthenticateWithCredential(credential)
            .then((data) => {
              console.log("Reauthed");
              user
                .updatePassword(newpass)
                .then((data) => {
                  // Update successful.
                  console.log("nice");
                })
                .catch((error) => {
                  // An error happened.
                  console.log(error.message, "failed to update password");
                });
            })
            .catch((error) => {
              // An error happened.
              console.log(error.message, "failed to reauth");
            });
        }
      }
    } else {
      user
        .updateProfile({
          displayName: name,
          // photoURL: photoURL
        })
        .then((data) => {
          // Update successful.
          console.log("profile updated");
          // this.setState({})
        })
        .catch((error) => {
          // An error happened.
          console.log("profile update error");
        });
    }
  };
  render() {
    if (this.props.firebase) {
      return (
        <div>
          {/* <p onClick={this.logout}>textInComponent</p>{" "} */}
          <DashBoardHeader />
          <DashboardSideBar />
          <ProfileContent
            onSubmit={this.onSubmit}
            onFileChange={this.onFileChange}
            firebase={this.props.firebase}
            details={this.state}
            onChange={this.onChange}
          />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

ProfilePage.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
  }))
)(ProfilePage);
