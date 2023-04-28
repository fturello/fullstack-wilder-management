import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../styles/components/UpdateSkill.module.css";

function AddSkill() {
	const [skills, setSkills] = useState([]);
	const [wilders, setWilders] = useState([]);
	const [selectedWilder, setSelectedWilder] = useState("");
	const [selectedSkills, setSelectedSkills] = useState([]);

	console.log(selectedSkills);

	useEffect(() => {
		const fetchWilders = async () => {
			const result = await axios.get("http://localhost:5000/api/wilder");
			setWilders(result.data);
		};
		fetchWilders();

		const fetchSkills = async () => {
			const result = await axios.get("http://localhost:5000/api/skill");
			setSkills(result.data);
		};
		fetchSkills();
	}, []);

	const handleCheckboxChange = (event) => {
		const checkboxValue = event.target.value;
		const isChecked = event.target.checked;

		if (isChecked) {
			setSelectedSkills((prevSkills) => [...prevSkills, checkboxValue]);
		} else {
			setSelectedSkills((prevSkills) =>
				prevSkills.filter((skill) => skill !== checkboxValue)
			);
		}
	};

	return (
		<div className={styles.container}>
			<h2 className={styles["category-title"]}>Update Wilder Skill</h2>
			<form
				className={styles["add-skill-form"]}
				onSubmit={(e) => {
					e.preventDefault();
					axios.post("http://localhost:5000/api/wilder/update-skill", {
						wilderName: selectedWilder,
						skillName: selectedSkills,
					});
				}}
			>
				<select
					onChange={(e) => {
						setSelectedWilder(e.target.value);
					}}
					defaultValue={"disabled"}
				>
					<option value='disabled' disabled>
						Select a wilder
					</option>
					{wilders.map((wilder) => (
						<option key={wilder.id} value={wilder.name}>
							{wilder.name}
						</option>
					))}
				</select>
				<div className={styles["skill-grid"]}>
					{skills.map((skill) => (
						<div key={skill.id} className={styles["skill-item"]}>
							<input
								type='checkbox'
								value={skill.name}
								className={styles["skill-checkbox"]}
								onChange={handleCheckboxChange}
							/>
							<p className={styles["skill-name"]}>{skill.name}</p>
						</div>
					))}
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default AddSkill;
