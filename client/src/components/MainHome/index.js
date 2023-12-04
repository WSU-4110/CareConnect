import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import PrimaryButton from './../PrimaryButton/PrimaryButton';

const MainHome = (props) => {
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
          <PrimaryButton><Link to="/MainHome">Home</Link></PrimaryButton>
          <PrimaryButton><Link to="/viewProfile">Profile</Link></PrimaryButton>
          <PrimaryButton><Link to="/Home">Social</Link></PrimaryButton>
          <PrimaryButton><Link to="/appointment">Appointment</Link></PrimaryButton>
          <PrimaryButton><Link to="">Discussions</Link></PrimaryButton>
          <PrimaryButton><Link to="/FeedbackForm">Feedback</Link></PrimaryButton>

        </div>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <h1>Welcome to User Home</h1>
      
      {props.children}
    </div>
  );
};

export default MainHome;
