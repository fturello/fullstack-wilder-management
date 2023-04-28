import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../styles/components/AddSkill.module.css";

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

function AddSkill({ update }: IUpdateSkillProps) {
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
		await axios.post("http://localhost:5000/api/wilder/add-skill", {
			wilderName: selectedWilder,
			skillName: selectedSkills,
		});

		update();
	};

	return (
		<div className={styles.container}>
			<h2 className={styles["category-title"]}>Add Skill</h2>
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
				<select
					onChange={(e) => {
						setSelectedSkills(
							Array.from(e.target.selectedOptions).map((el) => el.value)
						);
					}}
					defaultValue={"disabled"}
				>
					<option value='disabled' disabled>
						Select a skill
					</option>
					{skills.map((skill) => (
						<option key={skill.id} value={skill.name}>
							{skill.name}
						</option>
					))}
				</select>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default AddSkill;
