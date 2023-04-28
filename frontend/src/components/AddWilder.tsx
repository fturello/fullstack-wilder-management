import { useState } from "react";

import { UpdateProp, WilderData } from "../interfaces.ts";
import { wilderApi } from "../../services/axiosInstance.ts";

import styles from "../styles/components/AddWilder.module.css";

function AddWilder({ update }: UpdateProp): JSX.Element {
	const [wilderName, setWilderName] = useState<string>("");
	const [wilderEmail, setWilderEmail] = useState<string>("");

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();

		await wilderApi.post("", {
			name: wilderName,
			email: wilderEmail,
		} as WilderData);

		update();
	};

	const handleWilderNameChange = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setWilderName(e.target.value);
	};

	const handleWilderEmailChange = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setWilderEmail(e.target.value);
	};

	return (
		<div className={styles.container}>
			<h2 className={styles["category-title"]}>Add Wilder</h2>
			<form className={styles["add-wilder-form"]} onSubmit={handleSubmit}>
				<label>Name </label>
				<input value={wilderName} onChange={handleWilderNameChange} />
				<br />
				<label>Email </label>
				<input value={wilderEmail} onChange={handleWilderEmailChange} />
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default AddWilder;
