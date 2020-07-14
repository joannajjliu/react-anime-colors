import React from "react";
import PropTypes from "prop-types";

export const ColorsSelected = (props) => (
  <h1>The colors you have selected are {props.selectedColors.join(", ")}</h1>
);

ColorsSelected.propTypes = {
  selectedColors: PropTypes.array,
};
