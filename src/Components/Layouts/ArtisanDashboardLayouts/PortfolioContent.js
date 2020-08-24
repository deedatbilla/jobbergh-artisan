import React, { Component, createRef } from "react";
import placeholder from "../../../images/900-darren2x.png";
import Tag from "../Common/Tag";
import { Modal, Button } from "react-bootstrap";
// import test from "../../../images/1.jpeg";
import DropzoneLayout from "../ArtisanDashboardLayouts/DropzoneLayout";

const images = [
  { id: 1, url: "../../../images/1.jpeg" },
  { id: 2, url: "../../../images/2.jpeg" },
  { id: 3, url: "../../../images/3.jpeg" },
  { id: 4, url: "../../../images/4.jpeg" },
  { id: 5, url: "../../../images/5.jpeg" },
];

class PortfolioContent extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      skills: [],
      service: "",
      showWorkModal: "",
      workimages: [],
      bio:""
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    const { artisan, firestore, firebase } = this.props;
    firebase
      .storage()
      .ref(`${firebase.auth().currentUser.uid}/workplace`)
      .listAll()
      .then((result) => {
        result.items.forEach((imageRef) => {
          // And finally display them
          imageRef
            .getDownloadURL()
            .then((url) => {
              // TODO: Display the image on the UI
              console.log(url);
              this.setState({ workimages: this.state.workimages.concat(url) });
              //alert(url)
            })
            .catch(function (error) {
              // Handle any errors
            });
        });
      })
      .catch(function (error) {
        // Handle any errors
      });

    this.setState({
      skills: artisan.services,
    });
  }
  handleClose = () => {
    this.setState({ showWorkModal: false });
  };
  onFilesDrop = (files) => {
    // return firebase.uploadFiles(filesPath, files, filesPath)
  };
  onFileDelete = (file, key) => {
    // return firebase.deleteFile(file.fullPath, `${filesPath}/${key}`)
  };
  WorkplaceImagesModal = () => {
    const { showWorkModal } = this.state;
    return (
      <Modal show={showWorkModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropzoneLayout firebase={this.props.firebase} artisan={this.props.artisan} firestore={this.props.firestore} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  onSubmitSkill = async (e) => {
    e.preventDefault();
    const { service } = this.state;
    let skills = [...this.props.artisan.services, service];
    const { firebase, firestore, artisan } = this.props;
    try {
      // const data={
      //     ...artisan,
      //     services:
      // }
      await firestore.update({ collection: "users", doc: firebase.auth().currentUser.uid }, { services: skills });
      this.setState({ service: "" });
    } catch (error) {
      console.log(error.message);
    }
  };


  onSubmitBio = async (e) => {
    e.preventDefault();
    const { bio} = this.state;
   
    const { firebase, firestore, artisan } = this.props;
    try {
      await firestore.update({ collection: "users", doc: firebase.auth().currentUser.uid }, { bio: bio });
      this.setState({ bio: "" });
    } catch (error) {
      console.log(error.message);
      this.setState({ bio: "" });
    }
  };
  render() {
    const { artisan } = this.props;
    return (
      <div className="content-wrapper">
        {this.WorkplaceImagesModal()}
        {/* <!-- Content Header (Page header) --> */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Portfolio</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Portfolio</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* <!-- Left col --> */}
              <section className="col-lg-8 col-md-8">
                {/* <!-- Custom tabs (Charts with tabs)--> */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      {/* <i className="fa fa-chart-pie mr-1"></i> */}
                      Porfolio
                    </h3>
                    <div className="card-tools"></div>
                  </div>
                  <div className="card-body">
                    <div className="container-fluid">
                      <div className="row mb-3">
                        <div className="col-md-12">
                          <img src={placeholder} className="img-thumbnail" height={150} width={150} alt="profile" />
                          <button className="btn btn-warning m-2" style={{ position: "absolute", bottom: "0" }}>
                            Select profile picture
                          </button>
                        </div>
                      </div>
                      {/* Personal info start */}
                      <div className="row ">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-12">
                              <h3>Personal information</h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <p>First name</p>
                            </div>
                            <div className="col-md-6">
                              <p>{artisan.fname}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <p>Last name</p>
                            </div>
                            <div className="col-md-6">
                              <p>{artisan.lname}</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <p>Email</p>
                            </div>
                            <div className="col-md-6">
                              <p>{artisan.email}</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <p>Residence</p>
                            </div>
                            <div className="col-md-6">
                              <p>{artisan.residential_addr}</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <p>Digital address</p>
                            </div>
                            <div className="col-md-6">
                              <p>{artisan.digital_address}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="col-lg-4 col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      {/* <i className="fa fa-chart-pie mr-1"></i> */}
                      Workshop photos
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="container-fluid">
                      <div className="row">
                        {this.state.workimages.map((data) => (
                          <div className="col-md-3 mb-1 col-sm-6 col-xs-6 ">
                            <img
                              src={data}
                              alt="shop"
                              className="img-responsive"
                              style={{ border: "2px solid #fafafa", height: "100px", width: "100px" }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-12   ">
                          <button
                            type="button"
                            onClick={() => {
                              this.setState({ showWorkModal: true });
                            }}
                            className="btn btn-warning float-right"
                          >
                            Upload images of workplace
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="row">
              {/* <!-- Left col --> */}
              <section className="col-lg-8 connectedSortable">
                {/* <!-- Custom tabs (Charts with tabs)--> */}
                <div className="card">
                  <div className="card-header">
                    <ul class="nav nav-pills">
                      <li class="nav-item">
                        <a class="nav-link active" data-toggle="pill" href="#skills">
                          Skills & services
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="pill" href="#work-experience">
                          Work Experience
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="pill" href="#bio">
                          Bio
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div class="tab-content">
                      <div id="skills" class="container tab-pane active">
                        <br />
                        <div className="container-fluid">
                          <form onSubmit={this.onSubmitSkill}>
                            <div className="row">
                              <select name="service" required onChange={this.onChange} className="form-control col-md-3">
                                <option value="">---Select a service---</option>
                                {this.props.services.map((data) => (
                                  <option key={data.id} value={data.name}>
                                    {data.name}
                                  </option>
                                ))}
                              </select>
                              <button className="btn btn-warning col-md-3 ml-3" type="submit">
                                Add a service
                              </button>
                            </div>
                          </form>

                          <div className="row">
                            {artisan.services.map((data, index) => (
                              <Tag
                                item={data}
                                index={index}
                                artisan={artisan}
                                firestore={this.props.firestore}
                                skills={artisan.services}
                                firebase={this.props.firebase}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div id="work-experience" class="container tab-pane fade">
                        <br />
                        <div className="container-fluid">
                          <form onSubmit={this.onSubmitSkill}>
                            <div className="row">
                              <input
                                type="text"
                                className="form-control col-md-3"
                                placeholder="Add service or skill"
                                name="service"
                                value={this.state.value}
                                onChange={this.onChange}
                              />
                              <button className="btn btn-warning col-md-3 ml-3" type="submit">
                                Add a experience
                              </button>
                            </div>
                          </form>

                          <div className="row">
                            {artisan.services.map((data, index) => (
                              <Tag
                                item={data}
                                index={index}
                                artisan={artisan}
                                firestore={this.props.firestore}
                                experience={artisan.services}
                                firebase={this.props.firebase}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div id="bio" class="container tab-pane fade">
                        <form onSubmit={this.onSubmitBio}>
                          <div className="row">
                            <input
                              type="text"
                              className="form-control col-md-3"
                              placeholder="Add Bio"
                              name="bio"
                              value={this.state.bio}
                              onChange={this.onChange}
                            />
                            <button className="btn btn-warning col-md-3 ml-3" type="submit">
                              Add Bio
                            </button>
                          </div>
                        </form>
                        <br />
                        <h3>My Bio</h3>
                        <p>
                          {artisan.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PortfolioContent;
