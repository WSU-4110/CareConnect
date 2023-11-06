import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Main from "../Main";

const EditProfile = () => {
    const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		bio: "",
		dob: "",
		gender: "",
		personalInfo: "",
	});

    const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const { firstName, lastName } = data;
		try {
			if (!firstName.trim() || !lastName.trim()) {
				setError("FirstName and lastName cannot be empty.");
				return;
			}
			
			axios
				.post("http://localhost:8080/api/users/editProfile", data)
				.then((response) => {
					setError("");
					setMsg("Profile updated successfully");
					navigate("/viewProfile");
				})
				.catch((error) => {
					setError("Error updating user profile");
					console.error("Error saving user profile:", error);
				});
        } catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        };
    }
       
        const handleCancel = (e) => {
            e.preventDefault();
            navigate("/viewProfile");
        };
        useEffect(() => {
            const email = localStorage.getItem("user") || null;
            if (!email) return;
            axios
                .post("http://localhost:8080/api/users/getProfile", {
                    email,
                })
                .then((response) => {
                    const profile = response.data;
                    if (profile) {
                        setData({
                            firstName: profile.firstName || "",
                            lastName: profile.lastName || "",
                            email: profile.email || "",
                            bio: profile.bio || "",
                            dob: profile.dob?.substring(0, 10) || "",
                            gender: profile.gender || "",
                            personalInfo: profile.personalInfo || "",
                            
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user profile:", error);
                });
        }, []);

return (
    <Main>

              <div className={styles.edit_container}>
				<div className={styles.edit_form_container}>
					<div className={styles.inner}>
						<form
							className={styles.form_container}
							onSubmit={handleSubmit}
							
						>
							<h1>Edit Profile</h1>
							<input
								type="text"
								placeholder="First Name"
								name="firstName"
								onChange={handleChange}
								value={data.firstName}
								required
								className={styles.input}
							/>
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								onChange={handleChange}
								value={data.lastName}
								required
								className={styles.input}
							/>
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
								placeholder="Bio"
								name="bio"
								onChange={handleChange}
								value={data.bio}
								className={styles.input}
							/>
							<input
								type="date"
								name="dob"
								onChange={handleChange}
								value={data.dob}
								className={styles.input}
							/>
							<select
								name="gender"
								onChange={handleChange}
								value={data.gender}
								className={styles.input + " " + styles.select}
							>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="others">Others</option>
							</select>
							<input
								type="text"
								placeholder="Profession"
								name="personalInfo"
								onChange={handleChange}
								value={data.personalInfo}
								className={styles.input}
							/>
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




export default EditProfile;