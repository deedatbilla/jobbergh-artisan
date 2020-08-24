import React, { Component } from "react";
import HomeHeader from "../../Components/Layouts/Hompage/HomeHeader";
import PersonalInfo1 from "../../Components/Layouts/RegistrationForm/PersonalInfo1";
import Spinner from "../../Components/Layouts/Common/Spinner";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";
import { stepCounter } from "../../actions/RegistrationStepCounterAction";
import PersonalInfo2 from "../../Components/Layouts/RegistrationForm/PersonalInfo2";
import Education from "../../Components/Layouts/RegistrationForm/Education";
import Guarantors from "../../Components/Layouts/RegistrationForm/Guarantors";
class ArtisanRegistrationPage extends Component {
  Wizard = () => {
    const { step, firestore, firebase, artisan,services } = this.props;
    const user = firebase.auth().currentUser;
    //console.log(JSON.stringify(artisan));
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        // alert("sa")
        return <PersonalInfo1 firebase={firebase} firestore={firestore} user={user} details={artisan} />;
      case 2:
        return <PersonalInfo2 firebase={firebase} firestore={firestore} user={user} details={artisan} />;
      case 3:
        return <Education firebase={firebase} firestore={firestore} user={user} details={artisan} services={services} />;
      case 4:
        return (
          <Guarantors firebase={firebase} history={this.props.history} firestore={firestore} user={user} details={artisan} />
        );
    }
  };

  render() {
    if (this.props.artisan) {
      return <div className="container"> {this.Wizard()}</div>;
    } else return <Spinner />;
  }
}

ArtisanRegistrationPage.propTypes = {
  firestore: PropTypes.object.isRequired,
  artisan: PropTypes.array,
};
export default compose(
  firestoreConnect((props) => [
    { collection: "users", storeAs: "user", doc: props.firebase.auth().currentUser.uid },
    { collection: "services" },
  ]),
  firebaseConnect(),
  connect(
    (state, props) => ({
      step: state.stepCounter.step,
      artisan: state.firestore.ordered.user && state.firestore.ordered.user[0],
      services:state.firestore.ordered.services
    }),
    { stepCounter }
  )
)(ArtisanRegistrationPage);
