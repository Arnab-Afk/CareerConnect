import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {};

function Button(props) {
  const { title, link } = props;
  return (
    <Link to={link} className="tf-button">
      {title}
      <span className="icon-arrow-right2"></span>
    </Link>
  );
}

export default Button;
