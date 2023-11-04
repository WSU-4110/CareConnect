import React from "react";
import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>CareConnect</h1>
        <div className={styles.nav_links}>
          <a href="#">Home</a>
          <a href="/viewProfile">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Booking</a>
          <a href="#">Discussions</a>
        </div>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Main;
