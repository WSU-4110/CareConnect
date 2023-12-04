import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Main from "../Main";

const FeedbackForm = () => {
	const [data, setData] = useState({
		email: localStorage.getItem("user") || null,
		feedbackType: "", // Bug, inappropriate content, Feedback, Suggestion
		title: "",
		description: "",
		screenshot: "",
		picFile: null,
	});
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const { title, description, feedbackType } = data;
		try {
			if (!title.trim() || !description.trim() || !feedbackType.trim()) {
				setError("All required fields cannot be empty.");
				return;
			}
			const formData = new FormData();
			for (const key in data) {
				if (key === "picFile") continue;
				if (key === "screenshot") formData.append(key, data.picFile);
				else formData.append(key, data[key]);
			}
			axios
				.post("http://localhost:5001/api/users/submitFeedback", formData, {
					headers: {
						// "Content-Type": "multipart/form-data", // Set the content type for file upload
					},
				})
				.then((response) => {
					setError("");
					setMsg("Feedback Submitted successfully");
					setTimeout(() => {
						navigate("/");
					}, 1000);
				})
				.catch((error) => {
					setError("Error submitting feedback");
					console.error("Error submitting:", error);
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

	const handlePicChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			console.log(file);
			setData((prev) => ({ ...prev, picFile: file }));
			const reader = new FileReader();
			reader.onloadend = () => {
				setData((prev) => ({ ...prev, screenshot: reader.result }));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleCancel = (e) => {
		e.preventDefault();
		navigate("/viewProfile");
	};

	useEffect(() => {
		const email = localStorage.getItem("user") || null;
		if (!email) window.location.href = "/";
	}, []);

	return (
		<Main>
			<div className={styles.edit_container}>
				<div className={styles.edit_form_container}>
					<div className={styles.inner}>
						<form
							className={styles.form_container}
							onSubmit={handleSubmit}
							accept=".jpg, .jpeg, .png"
						>
							<h1>Feedback From</h1>
							<select
								name="feedbackType"
								onChange={handleChange}
								value={data.feedbackType}
								className={styles.input + " " + styles.select}
								required
							>
								<option value="">Select a Feedback</option>
								<option value="br">Bug Report</option>
								<option value="ic">
									Innappropriate Content
								</option>
								<option value="fe">Feedback</option>
								<option value="su">Suggesstion</option>
							</select>
							<input
								type="email"
								placeholder="Email"
								name="email"
								defaultValue={data.email}
								disabled
								required
								className={styles.input}
							/>
							<input
								type="text"
								placeholder="Title"
								name="title"
								onChange={handleChange}
								value={data.title}
								className={styles.input}
								required
							/>
							<textarea
								type="textarea"
								rows={5}
								placeholder="Description"
								name="description"
								onChange={handleChange}
								value={data.description}
								className={styles.input}
								required
							/>
							<div className={styles.screenshotSection}>
								<input
									type="file"
									onChange={handlePicChange}
									id="fileInput"
									style={{ display: "none" }}
								/>
								{data.screenshot ? (
									<img
										src={
											data.screenshot ||
											"default-profile-icon.png"
										}
										alt="Profile"
										className={styles.screenshot}
										onClick={(e) => {
											e.preventDefault();
											document
												.getElementById("fileInput")
												.click();
										}}
									/>
								) : (
									<button
										className={styles.green_btn}
										onClick={(e) => {
											e.preventDefault();
											document
												.getElementById("fileInput")
												.click();
										}}
									>
										+ Add Screenshot
									</button>
								)}
							</div>
							{error && (
								<div className={styles.error_msg}>{error}</div>
							)}
							{msg && (
								<div className={styles.success_msg}>{msg}</div>
							)}
							<div>
								<button
									className={styles.white_btn}
									onClick={handleCancel}
								>
									Cancel
								</button>
								<button
									type="submit"
									className={styles.green_btn}
								>
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Main>
	);
};

export default FeedbackForm;
