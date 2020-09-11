import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, PieChart, Pie, Sector, Cell } from "recharts";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";
import Spinner from "../Common/Spinner";



const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class DashboardContent extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";
  state = { total: 0 };

  componentDidMount() {
    const { orders } = this.props;
    if (orders) {
    }
  }
  render() {
    const { requests, reviews } = this.props;
    if (requests && reviews) {
      //  console.log(Piedata);
      let sum = 0;
      reviews.forEach((element) => {
        sum += element.rating;
      });
      sum = sum / reviews.length;
      let complete = 0;
      requests.forEach((element) => {
        if (element.status === "complete") {
          complete++;
        }
        // console.log(count)
        // return count;
      });
      let inprogress = 0;
      requests.forEach((element) => {
        if (element.status === "in-progress") {
          inprogress++;
        }
        // console.log(count)
        // return count;
      });
      let pending = 0;
      requests.forEach((element) => {
        if (element.status === "pending") {
          pending++;
        }
        // console.log(count)
        // return count;
      });

      let piedata = [
        { name: "Complete", value: complete },
        { name: "In-progress", value: inprogress },
        { name: "Pending", value: pending },
      ];
      const data = [
        { name: "Complete", total: complete },
        { name: "In-progress", total: inprogress },
        { name: "Pending", total: pending },
      ];
      return (
        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.content-header --> */}

          {/* <!-- Main content --> */}
          <section className="content">
            <div className="container-fluid">
              {/* <!-- Small boxes (Stat box) --> */}
              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{complete}</h3>
                      <p>Services completed</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-toolbox"></i>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>{sum || 0}/5</h3>

                      <p>Overall rating</p>
                    </div>
                    <div className="icon">
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                {/* <!-- ./col --> */}

                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>{inprogress}</h3>

                      <p>Active service</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-toolbox"></i>
                    </div>
                  </div>
                </div>
                {/* <!-- ./col --> */}
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{requests.length || 0}</h3>

                      <p>Total Requests</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-toolbox"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.row --> */}
              {/* <!-- Main row --> */}
              <div className="row">
                {/* <!-- Left col --> */}
                <section className="col-lg-8 connectedSortable">
                  {/* <!-- Custom tabs (Charts with tabs)--> */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fa fa-chart-bar mr-1"></i>
                        Bar
                      </h3>
                      <div className="card-tools"></div>
                    </div>
                    <div className="card-body">
                      {/* <canvas id="revenue-chart-canvas" height="300" style={{ height: "300px" }}></canvas> */}
                      <BarChart
                        width={700}
                        height={400}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                      </BarChart>
                    </div>
                    {/* <div className="chart tab-pane" id="sales-chart" style={{ position: "relative", height: "300px" }}>
                          <canvas id="sales-chart-canvas" height="300" style={{ height: "300px" }}></canvas>
                        </div> */}
                  </div>

                  {/* <!-- /.card --> */}
                </section>
                <section className="col-lg-4 connectedSortable">
                  {/* <!-- Custom tabs (Charts with tabs)--> */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fa fa-chart-pie mr-1"></i>
                        Pie
                      </h3>
                      <div className="card-tools"></div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          {/* <canvas id="revenue-chart-canvas" height="300" style={{ height: "300px" }}></canvas> */}
                          <PieChart width={400} height={400}>
                            <Pie
                              dataKey="value"
                              isAnimationActive={false}
                              data={piedata}
                              cx={140}
                              cy={150}
                              outerRadius={100}
                              fill="#8884d8"
                              label
                            />
                            {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
                            <Tooltip />
                          </PieChart>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- /.card --> */}
                </section>

                {/* <!-- /.Left col --> */}
                {/* <!-- right col (We are only adding the ID to make the widgets sortable)--> */}
                <section className="col-lg-5 connectedSortable">
                  {/* <!-- solid sales graph --> */}

                  {/* <!-- /.card --> */}

                  {/* <!-- Calendar --> */}

                  {/* <!-- /.card --> */}
                </section>
                {/* <!-- right col --> */}
              </div>
              {/* <!-- /.row (main row) --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
          </section>
          {/* <!-- /.content --> */}
        </div>
      );
    } else return <Spinner />;
  }
}

DashboardContent.propTypes = {
  firestore: PropTypes.object.isRequired,
  orders: PropTypes.array,
  firebase: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect((props) => [
    { collection: "ArtisanRequests", storeAs: "requests", where: [["artisan_id", "==", props.firebase.auth().currentUser.uid]] },
    { collection: "reviews", where: [["artisanid", "==", props.firebase.auth().currentUser.uid]] },
  ]),

  firebaseConnect(),
  connect((state, props) => ({
    requests: state.firestore.ordered.requests,
    reviews: state.firestore.ordered.reviews,
  }))
)(DashboardContent);
