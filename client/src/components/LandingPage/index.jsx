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
            <p>At Our Mental Health Platform, we are dedicated to providing resources, 
                information, and a safe, supportive community to help you navigate your 
                mental health challenges.</p>
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
