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


return (

              <div className={styles.edit_container}>
				<div className={styles.edit_form_container}>
					<div className={styles.inner}>
						<form
							className={styles.form_container}
							
						>
							<h1>Edit Profile</h1>
                        <input
								type="text"
								placeholder="First Name"
								name="firstName"
								defaultValue={data.firstName}
								className={styles.input}
								
							/>
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								defaultValue={data.lastName}
								className={styles.input}
								
							/>
							<input
								type="email"
								placeholder="Email"
								name="email"
								defaultValue={data.email}
								className={styles.input}
								
							/>
							<input
								type="text"
								placeholder="Bio"
								name="bio"
								defaultValue={data.bio}
								className={styles.input}
								
							/>
							<input
								type="date"
								name="dob"
								defaultValue={data.dob}
								className={styles.input}
                                								
							/>
							<input
								type="text"
                                placeholder="Gender"
								name="gender"
								defaultValue={data.gender}
								className={styles.input}
								
							/>

                        <input
							type="Profession"
							placeholder="Profession"
							name="Profession"
							required
							className={styles.input}
                            
						/>
                        <div>
								<button
									className={styles.white_btn}
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
);

};




export default EditProfile;