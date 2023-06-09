import { useState, useEffect, FormEvent, ChangeEvent } from "react";

import { Wilder, Skill, UpdateProp, UpdateSkill } from "../interfaces.ts";
import { wilderApi, skillApi } from "../../services/axiosInstance.ts";

import styles from "../styles/components/AddSkill.module.css";

function AddSkill({ update }: UpdateProp): JSX.Element {
	const [wilders, setWilders] = useState<Wilder[]>([]);
	const [skills, setSkills] = useState<Skill[]>([]);
	const [selectedWilder, setSelectedWilder] = useState<string | undefined>(
		undefined
	);
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

	const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();

		await wilderApi.post<UpdateSkill>("/add-skill", {
			wilderName: selectedWilder,
			skillName: selectedSkills,
		});

		update();
	};

	const handleSelectWilder = (e: ChangeEvent<HTMLSelectElement>): void => {
		setSelectedWilder(e.target.value);
	};

	const handleSelectSkill = (e: ChangeEvent<HTMLSelectElement>): void => {
		setSelectedSkills(
			Array.from(e.target.selectedOptions).map((el) => el.value)
		);
	};

	return (
		<div className={styles.container}>
			<h2 className={styles["category-title"]}>Add Skill</h2>
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
				<select onChange={handleSelectSkill} defaultValue={"disabled"}>
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
