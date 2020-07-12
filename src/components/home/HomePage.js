import React from "react";
import styles from "./HomePage.module.css";

export const HomePage = () => (
  <div className="jumbotron">
    <h1>My Anime Colors</h1>
    <div className={styles.container}>
      <p className={styles.content}>Ola amigos</p>
    </div>
  </div>
);
