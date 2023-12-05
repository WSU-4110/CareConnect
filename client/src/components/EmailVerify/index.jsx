import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../Images/success.png"
import styles from "./styles.module.css";
import { Fragment } from "react"; // Import Fragment correctly

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(null); // Change initial state to null
  const [error, setError] = useState(null); // Add error state
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:5001/api/users/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.error(error);
        setValidUrl(false); // Set validUrl to false on error
        setError(error.message); // Store error message
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      {validUrl === true ? ( // Check if validUrl is explicitly true
        <div className={styles.container}>
          <img src={success} alt="success_img" className={styles.success_img} />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className={styles.green_btn}>Login</button>
          </Link>
        </div>
      ) : validUrl === false ? ( // Check if validUrl is explicitly false
        <div className={styles.container}>
          <h1>Email verification failed</h1>
          {error && <p>Error: {error}</p>} {/* Display error message */}
        </div>
      ) : (
        <p>Verifying...</p> // Show a loading message while waiting for the response
      )}
    </Fragment>
  );
};

export default EmailVerify;