import { useState } from "react";
import axios from "axios";

function AddWilder() {
	const [wilderName, setWilderName] = useState("");
	const [wilderEmail, setWilderEmail] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				axios.post("http://localhost:5000/api/wilder", {
					name: wilderName,
					email: wilderEmail,
				});
			}}
		>
			<h3>Add Wilder</h3>
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
	);
}

export default AddWilder;
