import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import DashBoardHeader from '../../Components/Layouts/ArtisanDashboardLayouts/DashBoardHeader';
import DashboardContent from '../../Components/Layouts/ArtisanDashboardLayouts/DashboardContent';
import DashboardSideBar from '../../Components/Layouts/ArtisanDashboardLayouts/DashboardSideBar';
class Dashboard extends Component {
  
  static getDerivedStateFromProps(props, state) {
    const { artisan, history } = props;
    if (artisan) {
      if (artisan.isFirstTimelogin&& artisan.userType==="artisan") {
        history.push("/password-reset");
      } else if (!artisan.registrationComplete&& artisan.userType==="artisan") {
        history.push("/register");
      }
      //  else{ alert("you are not an artisan")}
    }

    return null;
  }
  logout = () => {
    this.props.firebase.logout();
  };
  render() {
    //console.log(this.props.artisan);
    return (
      <div>
       <DashBoardHeader/>
       <DashboardSideBar/>
       <DashboardContent/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  firebase: PropTypes.object.isRequired,
};
export default compose(
  firestoreConnect((props) => [{ collection: "users", storeAs:"user", doc: props.firebase.auth().currentUser.uid }]),
  firebaseConnect(),
  connect(({ firestore: { ordered } }, props) => ({
    artisan: ordered.user && ordered.user[0],
  }))
)(Dashboard);
