import React from "react";
import PropTypes from "prop-types";

const DropeDownComponent = (props) => {
  return (
    <>
      <select name={props.name} value={props.value} className="form-control" required onChange={props.onChange}>
        <option value="" selected>
          ---Select {props.name}----
        </option>

        {props.data.map((data) => (
          <option value={data.option || data.type || data.industry || data.category || data.planName ||data.plantype}>
            {data.option || data.type || data.industry || data.category || data.planName||data.plantype}
          </option>
        ))}
      </select>
    </>
  );
};

DropeDownComponent.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default DropeDownComponent;
