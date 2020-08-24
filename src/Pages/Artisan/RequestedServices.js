import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import DashboardSideBar from "../../Components/Layouts/ArtisanDashboardLayouts/DashboardSideBar";
import DashBoardHeader from "../../Components/Layouts/ArtisanDashboardLayouts/DashBoardHeader";
import PortfolioContent from "../../Components/Layouts/ArtisanDashboardLayouts/PortfolioContent";
import Spinner from "../../Components/Layouts/Common/Spinner";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
class RequestedServices extends Component {
  render() {
    if (this.props.requests) {
      const { firebase, artisan, firestore, services } = this.props;
      return (
        <div>
          <DashBoardHeader />
          <DashboardSideBar />
          <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark"> Manage requests</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Manage requests</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.content-header --> */}

            {/* <!-- Main content --> */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div class="col">
                    <div class="card">
                      <div class="card-header border-transparent">
                        <h3 class="card-title">My service requests</h3>

                        <div class="card-tools">
                          <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                          </button>
                          <button type="button" class="btn btn-tool" data-card-widget="remove">
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                      {/* <!-- /.card-header --> */}
                      <div class="card-body p-0">
                        <div class="table-responsive">
                          <table class="table m-0">
                            <thead>
                              <tr>
                                <th>Request ID</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Service requested</th>
                                <th>Date requested</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.props.requests.map((data) => (
                                <tr key={data.id}>
                                  <td>{data.id}</td>
                                  <td>{data.location}</td>
                                  <td>
                                    <span
                                      className={
                                        data.status === "pending"
                                          ? "badge badge-warning"
                                          : data.status === "cancelled"
                                          ? "badge badge-danger"
                                          : data.status === "approved"
                                          ? "badge badge-primary"
                                          : data.status === "complete"
                                          ? "badge badge-success"
                                          : null
                                      }
                                    >
                                      {data.status}
                                    </span>
                                  </td>
                                  <td>{data.type_of_skill}</td>
                                  <td>{new Date(data.datecreated.seconds).toString()}</td>
                                  <td>
                                    <span>
                                      <button
                                        className="btn btn-primary btn-sm"
                                        onClick={async () => {
                                          const { firestore } = this.props;
                                          confirmAlert({
                                            title: "Approve request",
                                            message: `You are about to approve request for a ${data.type_of_skill} service  .`,
                                            buttons: [
                                              {
                                                label: "Confirm",
                                                onClick: async () => {
                                                  try {
                                                    await firestore.update(
                                                      { collection: "ArtisanRequests", doc: data.id },
                                                      { status: "approved" }
                                                    );
                                                  } catch (error) {
                                                    console.log(error.message);
                                                  }
                                                },
                                              },
                                              {
                                                label: "Cancel",
                                                onClick: () => null,
                                              },
                                            ],
                                          });
                                          //   await firestore.u
                                        }}
                                      >
                                        Approve
                                      </button>
                                    </span>
                                  </td>
                                  <td>
                                    <span>
                                      <button
                                        className="btn btn-danger btn-sm"
                                        onClick={async () => {
                                          const { firestore } = this.props;
                                          confirmAlert({
                                            title: "Cancel request",
                                            message: "Are you sure to cancel this request?.",
                                            buttons: [
                                              {
                                                label: "Yes",
                                                onClick: async () => {
                                                  try {
                                                    await firestore.update(
                                                      { collection: "ArtisanRequests", doc: data.id },
                                                      { status: "cancelled" }
                                                    );
                                                  } catch (error) {
                                                    console.log(error.message);
                                                  }
                                                },
                                              },
                                              {
                                                label: "No",
                                                onClick: () => null,
                                              },
                                            ],
                                          });
                                          //   await firestore.u
                                        }}
                                      >
                                        Cancel
                                      </button>
                                    </span>
                                  </td>

                                  {data.status === "approved" ? (
                                    <td>
                                      <span>
                                        <button
                                          className="btn btn-success btn-sm"
                                          onClick={async () => {
                                            const { firestore } = this.props;
                                            confirmAlert({
                                              title: "Confirm service completion",
                                              message: "Have you completed this service?.",
                                              buttons: [
                                                {
                                                  label: "Confirm",
                                                  onClick: async () => {
                                                    try {
                                                      await firestore.update(
                                                        { collection: "ArtisanRequests", doc: data.id },
                                                        { status: "complete" }
                                                      );
                                                    } catch (error) {
                                                      console.log(error.message);
                                                    }
                                                  },
                                                },
                                                {
                                                  label: "Cancel",
                                                  onClick: () => null,
                                                },
                                              ],
                                            });
                                            //   await firestore.u
                                          }}
                                        >
                                          Complete
                                        </button>
                                      </span>
                                    </td>
                                  ) : null}
                                </tr>
                              ))}
                              {/* <tr>
                                <td>
                                  <a href="pages/examples/invoice.html">OR9842</a>
                                </td>
                                <td>Call of Duty IV</td>
                                <td>
                                  <span class="badge badge-success">Shipped</span>
                                </td>
                                <td>
                                  <div class="sparkbar" data-color="#00a65a" data-height="20">
                                    90,80,90,-70,61,-83,63
                                  </div>
                                </td>
                              </tr> */}
                            </tbody>
                          </table>
                        </div>
                        {/* <!-- /.table-responsive --> */}
                      </div>
                      {/* <!-- /.card-body --> */}

                      {/* <!-- /.card-footer --> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

RequestedServices.propTypes = {
  firebase: PropTypes.object.isRequired,
};
export default compose(
  firestoreConnect((props) => [
    { collection: "ArtisanRequests", storeAs: "requests", where: [["artisan_id", "==", props.firebase.auth().currentUser.uid]] },
  ]),
  firebaseConnect(),
  connect(({ firestore: { ordered } }, props) => ({
    requests: ordered.requests,
  }))
)(RequestedServices);
