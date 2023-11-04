import styles from "./styles.module.css";
import Main from "../Main";
import { useEffect, useState } from "react";

const ViewProfile = () => {

    return (
        <div className= {styles["left-section"]}>
        

<div className={styles.right}>
					<form className={styles.form_container} >
						<h1>User Profile</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							required
							className={styles.input}
						/>
						<input
							type="Gender"
							placeholder="Gender"
							name="Gender"
							required
							className={styles.input}
						/>
                        <input
							type="DOB"
							placeholder="DOB"
							name="DOB"
							required
							className={styles.input}
						/>

                        <input
							type="Profession"
							placeholder="Profession"
							name="Profession"
							required
							className={styles.input}
						/>

                        <input
							type="About Me"
							placeholder="About Me"
							name="About Me"
							required
							className={styles.input}
						/>
						
                        <div>
						<button type="submit" className={styles.green_btn}>
							Save
						</button>
                        <button type="submit" className={styles.green_btn}>
							Cancel
						</button>
                        </div>
					</form>
				</div>

</div>


);

};

export default ViewProfile;