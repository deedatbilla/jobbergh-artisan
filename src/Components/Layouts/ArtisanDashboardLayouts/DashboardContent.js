import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Sector, Cell } from "recharts";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";
import Spinner from "../Common/Spinner";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
  state = { total: 0 };

  componentDidMount() {
    const { orders } = this.props;
    if (orders) {
    }
  }
  render() {
    const { requests,reviews } = this.props;
    if (requests&&reviews) {
      //  console.log(Piedata);
      let sum = 0;
    reviews.forEach((element) => {
      sum += element.rating;
    });
    sum = sum / reviews.length;
    let complete = 0;
    requests.forEach(element => {
     
      if (element.status === "complete") {
        complete++;
      }
      // console.log(count)
      // return count;
    })
    let inprogress = 0;
    requests.forEach(element => {
     
      if (element.status === "in-progress") {
        inprogress++;
      }
      // console.log(count)
      // return count;
    })
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
                      <h3>
                        {complete}
                      </h3>
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
                      <h3>{sum||0}/5</h3>

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
                      <h3>
                        {inprogress}
                      </h3>

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
                      <h3>{requests.length||0}</h3>

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
                        <i className="fa fa-chart-pie mr-1"></i>
                        Services
                      </h3>
                      <div className="card-tools"></div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content p-0">
                        {/* <!-- Morris chart - Sales --> */}
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{ position: "relative", height: "300px" }}
                        >
                          {/* <canvas id="revenue-chart-canvas" height="300" style={{ height: "300px" }}></canvas> */}
                          {/* <AreaChart
                            id="revenue-chart-canvas"
                            width={800}
                            height={400}
                            data={data}
                            margin={{
                              top: 10,
                              right: 30,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                          </AreaChart> */}
                        </div>
                        <div className="chart tab-pane" id="sales-chart" style={{ position: "relative", height: "300px" }}>
                          <canvas id="sales-chart-canvas" height="300" style={{ height: "300px" }}></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.card --> */}
                </section>
                <section className="col-lg-4 connectedSortable">
                  {/* <!-- Custom tabs (Charts with tabs)--> */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fa fa-chart-pie mr-1"></i>
                        Total
                      </h3>
                      <div className="card-tools"></div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content p-0">
                        {/* <!-- Morris chart - Sales --> */}
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{ position: "relative", height: "300px" }}
                        >
                          {/* <canvas id="revenue-chart-canvas" height="300" style={{ height: "300px" }}></canvas> */}
                          {/* <PieChart width={600} height={600}>
                            <Pie
                              data={Piedata}
                              cx={200}
                              cy={200}
                              labelLine={false}
                              label={renderCustomizedLabel}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                          </PieChart> */}
                        </div>
                        <div className="chart tab-pane" id="sales-chart" style={{ position: "relative", height: "300px" }}>
                          <canvas id="sales-chart-canvas" height="300" style={{ height: "300px" }}></canvas>
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
