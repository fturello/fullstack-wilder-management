import { useState, useEffect, FormEvent, ChangeEvent } from "react";

import { Wilder, Skill, UpdateProp } from "../interfaces.ts";
import { wilderApi, skillApi } from "../../services/axiosInstance.ts";

import styles from "../styles/components/UpdateSkill.module.css";

function UpdateSkill({ update }: UpdateProp): JSX.Element {
	const [wilders, setWilders] = useState<Wilder[]>([]);
	const [skills, setSkills] = useState<Skill[]>([]);
	const [selectedWilder, setSelectedWilder] = useState("");
	const [selectedSkills, setSelectedSkills] = useState<Array<string>>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [wildersResult, skillsResult] = await Promise.all([
					wilderApi.get(""),
					skillApi.get(""),
				]);

				setWilders(wildersResult.data);
				setSkills(skillsResult.data);
			} catch (e) {
				console.error("Error fetching data :", e);
			}
		};

		fetchData();
	}, []);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await wilderApi.post("/update-skill", {
			wilderName: selectedWilder,
			skillName: selectedSkills,
		});

		update();
	};

	const handleSelectWilder = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedWilder(e.target.value);
	};

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
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
			<form className={styles["add-skill-form"]} onSubmit={handleSubmit}>
				<select onChange={handleSelectWilder} defaultValue={"disabled"}>
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

export default UpdateSkill;
