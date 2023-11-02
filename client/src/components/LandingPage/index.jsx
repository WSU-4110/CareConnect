import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles["landing-page"]}>
      <div className={styles.container}>
        <div className={styles["left-section"]}>
            <h1>CareConnect</h1>
          <div className={styles["get-started"]}>
            <p>Our Mental Health Platform provides direct access to healthcare professionals, fostering a supportive community for individuals dealing with mental health challenges.</p>
          </div>
        </div>
        <div className={styles["right-section"]}>
            <h1>Get Started</h1>
          <div className={styles["sign-in-sign-up"]}>
            <Link to="/login">
              <button className={styles["sign-in-button"]}>Sign In</button>
            </Link>
            <Link to="/signup">
              <button className={styles["sign-up-button"]}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
