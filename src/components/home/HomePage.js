import React from "react";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let squares = [];
  for (let i = 0; i < 12; i++) {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    squares.push(
      <div
        className={`col-4 ${styles.square}`}
        style={{ backgroundColor: `#${randomColor}` }}
      ></div>
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
      <div
        className={styles.square}
        style={{ backgroundColor: `#${randomColor}` }}
      ></div>
      <div className={styles.sqcontainer}>{squares}</div>
    </div>
  );
};
