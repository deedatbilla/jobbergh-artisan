import React from "react";
import PropTypes from "prop-types";

const TextInputComponent = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      required
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      className="form-control"
    />
  );
};

TextInputComponent.propTypes = {
  type:PropTypes.string.isRequired,
  placeholder:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
};

export default TextInputComponent;
