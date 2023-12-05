import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import PrimaryButton from './../PrimaryButton/PrimaryButton';

const Main = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    //window.location.reload();

   window.location.href = "/";
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>CareConnect</h1>
        <div className={styles.nav_links}>
          <PrimaryButton><Link to="/Home">Home</Link></PrimaryButton>
          <PrimaryButton><Link to="/viewProfile">Profile</Link></PrimaryButton>
          <PrimaryButton><Link to="">Settings</Link></PrimaryButton>
          <PrimaryButton><Link to="/appointment">Appointment</Link></PrimaryButton>
          <PrimaryButton><Link to="/discussion-threads">Discussions</Link></PrimaryButton>
          <PrimaryButton><Link to="/FeedbackForm">Feedback</Link></PrimaryButton>

        </div>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      {props.children}
    </div>
  );
};

export default Main;
