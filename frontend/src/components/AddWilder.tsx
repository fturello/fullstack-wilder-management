import { useState } from "react";
import axios from "axios";

import styles from "../styles/components/AddWilder.module.css";

function AddWilder() {
	const [wilderName, setWilderName] = useState("");
	const [wilderEmail, setWilderEmail] = useState("");

	return (
		<div className={styles.container}>
			<h2 className={styles["category-title"]}>Add Wilder</h2>
			<form
				className={styles["add-wilder-form"]}
				onSubmit={(e) => {
					e.preventDefault();
					axios.post("http://localhost:5000/api/wilder", {
						name: wilderName,
						email: wilderEmail,
					});
				}}
			>
				<label>Name </label>
				<input
					value={wilderName}
					onChange={(e) => {
						setWilderName(e.target.value);
					}}
				/>
				<br />
				<label>Email </label>
				<input
					value={wilderEmail}
					onChange={(e) => {
						setWilderEmail(e.target.value);
					}}
				/>
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default AddWilder;
