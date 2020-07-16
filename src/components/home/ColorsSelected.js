import React from "react";
import PropTypes from "prop-types";
import styles from "./ColorsSelected.module.css";

export const ColorsSelected = (props) => {
  const selectedColors = props.selectedColors;
  if (selectedColors && selectedColors.length > 0) {
    let returnString = [];
    {
      selectedColors.map((selectedColor, index) => {
        returnString.push(
          <div
            key={index}
            className={`${styles.square}`}
            style={{ backgroundColor: `#${selectedColor}` }}
          >
            <div className={`${styles.squareText}`}>#{selectedColor}</div>
          </div>
        );
      });
    }
    return (
      <div>
        <h1>The colors you have selected are:</h1>
        {returnString}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please select up to 3 colors.</h1>
      </div>
    );
  }
};

ColorsSelected.propTypes = {
  selectedColors: PropTypes.array,
};
