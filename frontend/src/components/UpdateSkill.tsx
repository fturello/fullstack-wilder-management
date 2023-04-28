import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../styles/components/UpdateSkill.module.css";

interface IWilder {
	id: number;
	name: string;
}

interface ISkill {
	id: number;
	name: string;
}

interface IUpdateSkillProps {
	update: () => void;
}

function UpdateSkill({ update }: IUpdateSkillProps) {
	const [wilders, setWilders] = useState<IWilder[]>([]);
	const [skills, setSkills] = useState<ISkill[]>([]);
	const [selectedWilder, setSelectedWilder] = useState("");
	const [selectedSkills, setSelectedSkills] = useState<Array<string>>([]);

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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await axios.post("http://localhost:5000/api/wilder/update-skill", {
			wilderName: selectedWilder,
			skillName: selectedSkills,
		});

		update();
	};

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

export default UpdateSkill;
