import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const AdminDashboard = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    // window.location.href = "/";
  };

  return (
    <div className={styles.admin_container}>
      <nav className={styles.admin_navbar}>
        <h1>Admin Dashboard</h1>
        <h2>Welcome to the admin dashboard</h2>
        <Link to="/">Home</Link>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className={styles.admin_content}>
        <aside className={styles.sidebar}>
          <h3>Sidebar</h3>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </aside>

        <main className={styles.main_content}>
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
