import React, { useState, useEffect } from "react";
import { ColorsSelected } from "./ColorsSelected";
import styles from "./HomePage.module.css";
import clickSound from "../../sounds/Click.mp3";
import bellSound01 from "../../sounds/zapsplat_bell_small_ring_01.mp3";
import UIFx from "uifx";

export const HomePage = () => {
  // const [selectedColors, setSelectedColors] = useState([]);
  // const handleClick = () => {
  //   setSelectedColors((selectedColors) => [
  //     ...selectedColors,
  //     `#${randomColor}`,
  //   ]);
  // };
  const colorsClicked = [];
  const click = new UIFx(clickSound, { Volume: 0.4, throttleMs: 100 });
  const bell01 = new UIFx(bellSound01, { Volume: 0.4, throttleMs: 100 });
  let colors = [];
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let squares = [];
  for (let i = 0; i < 12; i++) {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
    squares.push(
      <div key={i} className={`col-4 text-center`} style={{ padding: `0` }}>
        <div
          onMouseOver={() => {
            click.play();
          }}
          onClick={() => {
            bell01.play();
            colorsClicked.push(colors[i]);
            if (colorsClicked.length > 3) {
              colorsClicked.shift();
            }
            console.log("colorsClicked", colorsClicked);
          }}
          className={`${styles.square}`}
          style={{ backgroundColor: `#${randomColor}` }}
        ></div>
      </div>
    );
  }
  return (
    <div>
      <div className="jumbotron">
        <center>
          <h1>My Anime Colors</h1>
        </center>
        <div className={styles.container}>
          <p className={styles.content}>
            Match colors with your favorite animes
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">{squares}</div>
        <ColorsSelected colors={colorsClicked} />
      </div>
      {/* <div>{`The colors you've selected are: ${colorsClicked}`}</div> */}
    </div>
  );
};
