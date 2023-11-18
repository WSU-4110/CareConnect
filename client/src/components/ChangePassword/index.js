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
		e.preventDefault();
		const { oldPassword, newPassword, confirmPassword } = data;
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
			axios
				.post("http://localhost:8080/api/users/getProfile", {
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
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	useEffect(() => {
        const email = localStorage.getItem("user") || null
		axios
			.post("http://localhost:8080/api/users/getProfile", {
				email
			})
			.then((response) => {
				const profile = response.data;
				if (profile) {
					setData({
						firstName: profile.firstName || "",
						lastName: profile.lastName || "",
						email: profile.email || "",
						bio: profile.bio || "",
						dob: profile.dob.substring(0, 10) || "",
						gender: profile.gender || "",
						personalInfo: profile.personalInfo || "",
						password: profile.password || "",
						profilePic: profile.profilePic || null,
					});
				}
			})
			.catch((error) => {
				console.error("Error fetching user profile:", error);
			});
	}, []);

	return (
		<div className={styles.change_pwd_container}>
			<div className={styles.change_pwd_form_container}>
				<div className={styles.inner}>
					<form
						className={styles.form_container}
						onSubmit={handleSubmit}
						enctype="multipart/form-data"
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
