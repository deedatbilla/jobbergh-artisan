import React from "react";
import Spinner from "./Spinner";

const GenericTable = (props) => {
  if (props.data) {
    return (
      <div className=" col-sm-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{props.cardTitle}</h3>
          </div>
          {/* <!-- /.card-header --> */}
          <div className="card-body p-0">
            <table className="table">
              <thead>
                <tr>
                  {props.th.map((headers) => (
                    <th>{headers}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {props.data.map((data, index) => (
                  <tr key={index}>
                    {props.th.map(k=>(<td>{data}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- /.card-body --> */}
      </div>
    );
  } else return <Spinner />;
};

export default GenericTable;
