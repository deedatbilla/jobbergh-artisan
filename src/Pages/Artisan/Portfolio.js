import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import DashboardSideBar from "../../Components/Layouts/ArtisanDashboardLayouts/DashboardSideBar";
import DashBoardHeader from "../../Components/Layouts/ArtisanDashboardLayouts/DashBoardHeader";
import PortfolioContent from "../../Components/Layouts/ArtisanDashboardLayouts/PortfolioContent";
import Spinner from "../../Components/Layouts/Common/Spinner";
class Portfolio extends Component {
  render() {
    if (this.props.artisan&&this.props.services) {
      const { firebase, artisan, firestore,services } = this.props;
      return (
        <div>
          <DashBoardHeader />
          <DashboardSideBar />
          <PortfolioContent firebase={firebase} artisan={artisan} firestore={firestore} services={services} />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Portfolio.propTypes = {
  firebase: PropTypes.object.isRequired,
};
export default compose(
  firestoreConnect((props) => [
    { collection: "users", storeAs: "artisan", doc: props.firebase.auth().currentUser.uid },
    { collection: "services" },
  ]),
  firebaseConnect(),
  connect(({ firestore: { ordered } }, props) => ({
    artisan: ordered.artisan && ordered.artisan[0],
    services:ordered.services,
  }))
)(Portfolio);
