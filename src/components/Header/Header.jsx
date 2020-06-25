import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

export default function Header(props) {
  const { header } = props;
  return (
    <h1 className="header">{header}</h1>
  );
}

Header.defaultProps = {
  header: "Welcome to CRUD post publisher"
};

Header.propTypes = {
  header: PropTypes.string
};