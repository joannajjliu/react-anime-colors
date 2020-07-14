import React from "react";
import { ColorTiles } from "./ColorTiles";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const colorsArray = createColorsArray();
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
        <ColorTiles colors={colorsArray} />
      </div>
    </div>
  );
};

const createColorsArray = () => {
  const colors = [];
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  for (let i = 0; i < 12; i++) {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }
  return colors;
};
