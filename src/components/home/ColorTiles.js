import React from "react";
import PropTypes from "prop-types";
import { ColorsSelected } from "./ColorsSelected";
import styles from "./HomePage.module.css";
import clickSound from "../../sounds/Click.mp3";
import bellSound01 from "../../sounds/zapsplat_bell_small_ring_01.mp3";
import UIFx from "uifx";

export class ColorTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedColors: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("selectedColors:", this.state.selectedColors);
  //   return true;
  // }

  handleClick(index) {
    console.log("index: ", index);
    if (this.state.selectedColors.length === 3) {
      let array = [...this.state.selectedColors];
      array.shift();
      this.setState((prevState, prevProps) => ({
        selectedColors: [...array, prevProps.colors[index]],
      }));
    } else {
      this.setState((prevState, prevProps) => ({
        selectedColors: [...this.state.selectedColors, prevProps.colors[index]],
      }));
    }
  }

  createSquares() {
    const click = new UIFx(clickSound, { Volume: 0.4, throttleMs: 100 });
    const bell01 = new UIFx(bellSound01, { Volume: 0.4, throttleMs: 100 });
    let squares = [];
    for (let i = 0; i < 12; i++) {
      squares.push(
        <div key={i} className={`col-4 text-center`} style={{ padding: `0` }}>
          <div
            onMouseOver={() => {
              click.play();
            }}
            onClick={() => {
              bell01.play();
              this.handleClick(i);
            }}
            className={`${styles.square}`}
            style={{ backgroundColor: `#${this.props.colors[i]}` }}
          ></div>
        </div>
      );
    }
    return squares;
  }
  render() {
    const squares = this.createSquares();
    return (
      <div>
        <div className="container">
          <div className="row">{squares}</div>
        </div>
        <ColorsSelected selectedColors={this.state.selectedColors} />
      </div>
    );
  }
}

ColorTiles.propTypes = {
  colors: PropTypes.array,
};
