import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Main from "../Main";
//import LandingPage from "../LandingPage"; // Import your LandingPage component

const ViewProfile = () => {

    const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		bio: "",
		dob: "",
		gender: "",
		personalInfo: "",
		profilePic: "",
		
	});
    const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/editProfile");
    };


    
    useEffect(() => {
		const email = localStorage.getItem("user") || null;
		if (!email) return;
		axios
			.post("http://localhost:5001/api/users/getProfile", {
				email,
			})
			.then((response) => {
				const profile = response.data;
				console.log(profile);
				if (profile) {
					setData({
						firstName: profile.firstName || "",
						lastName: profile.lastName || "",
						email: profile.email || "",
						bio: profile.bio || "",
						dob: profile.dob?.substring(0, 10) || "",
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
           <Main>
			<div className={styles.edit_container}>
				<div className={styles.edit_form_container}>
					<div className={styles.inner}>
						<form
							className={styles.form_container}
							onSubmit={handleSubmit}
						>
							<h1>Profile</h1>
							<div className={styles.profilePicSection}>
								<img
									src={
										data.profilePic ||
										"default-profile-icon.png"
									}
									alt="Profile"
									className={styles.profilePic}
								/>
							</div>
                        <input
								type="text"
								placeholder="First Name"
								name="firstName"
								defaultValue={data.firstName}
								className={styles.input}
								readOnly
							/>
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								defaultValue={data.lastName}
								className={styles.input}
								readOnly
							/>
							<input
								type="email"
								placeholder="Email"
								name="email"
								defaultValue={data.email}
								className={styles.input}
								readOnly
							/>
							<input
								type="text"
								placeholder="Bio"
								name="bio"
								defaultValue={data.bio}
								className={styles.input}
								readOnly
							/>
							<input
								type="date"
								name="dob"
								defaultValue={data.dob}
								className={styles.input}
								readOnly
							/>
							<input
								type="text"
                                placeholder="Gender"
								name="gender"
								defaultValue={data.gender}
								className={styles.input}
								readOnly
							/>

                        <input
							type="Profession"
							placeholder="Profession"
							name="personalInfo"
                            defaultValue={data.personalInfo}							
							className={styles.input}
                            readOnly
						/>

                        
                        <button type="submit" className={styles.green_btn}>
								Edit Profile
						</button>
                        

                        
                        
					</form>
				</div>
        </div>
</div>

</Main>
);

};

export default ViewProfile;