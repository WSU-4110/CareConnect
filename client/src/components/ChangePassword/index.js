import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const ChangePassword = () => {
	const [data, setData] = useState({
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		console.log("here,", e);
		e.preventDefault();
		const { oldPassword, newPassword, confirmPassword } = data;
		console.log(data);
		const email = localStorage.getItem("user") || null;
		try {
			if (
				!oldPassword.trim() ||
				!newPassword.trim() ||
				!confirmPassword.trim()
			) {
				setError("Values cannot be empty.");
				return;
			}	
			if (newPassword !== confirmPassword) {
				setError("New password and confirm password don't match!");
				return;
			}
			console.log("'heree'");
			axios
				.post("http://localhost:5001/api/users/changePassword", {
					email, 
					oldPassword,
					newPassword,
				})
				.then(() => {
					setMsg("Password Changed, Navigating to profile...");
					setTimeout(() => {
						navigate("/viewProfile");
					}, 2000);
				})
				.catch((error) => {
					setError(error?.response?.data?.error || "An error occurred. Please try again.");
				});
		} catch (error) {
			console.log(error);
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};



	return (
		<div className={styles.change_pwd_container}>
			<div className={styles.change_pwd_form_container}>
				<div className={styles.inner}>
					<form
						className={styles.form_container}
						onSubmit={handleSubmit}
					>
						<h1>Change Password</h1>
						<input
							type="password"
							placeholder="Old Password"
							name="oldPassword"
							value={data.oldPassword}
							onChange={handleChange}
							className={styles.input}
                            required
						/>
						<input
							type="password"
							placeholder="New Password"
							name="newPassword"
							value={data.newPassword}
							onChange={handleChange}
							className={styles.input}
                            required
						/>
						<input
							type="password"
							placeholder="Confirm Password"
							name="confirmPassword"
							value={data.confirmPassword}
							onChange={handleChange}
							className={styles.input}
                            required
						/>
						{error && (
							<div className={styles.error_msg}>{error}</div>
						)}
						{msg && <div className={styles.success_msg}>{msg}</div>}
						<button type="submit" className={styles.green_btn}>
							Update
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
