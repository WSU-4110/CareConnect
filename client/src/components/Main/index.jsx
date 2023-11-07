import React from "react";
import styles from "./styles.module.css";

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
          <a href="/Home">Home</a>
          <a href="/viewProfile">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Booking</a>
          <a href="/DiscussionThreads">Discussions</a>
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
