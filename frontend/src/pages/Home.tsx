import { useEffect, useState } from "react";
import axios from "axios";

import AddWilder from "../components/AddWilder.jsx";
import AddSkill from "../components/AddSkill.jsx";
import UpdateSkill from "../components/UpdateSkill.jsx";
import Wilder, { IWilderProps } from "../components/Wilder.jsx";

import styles from "../styles/pages/Home.module.css";

interface ISkillFromAPI {
	id: number;
	name: string;
}

interface IWilderFromAPI {
	id: number;
	name: string;
	email: string;
	skills: ISkillFromAPI[];
}

function Home() {
	const [wilders, setWilders] = useState<IWilderProps[]>([]);

	const fetchData = async () => {
		const result = await axios.get<IWilderFromAPI[]>(
			"http://localhost:5000/api/wilder"
		);

		setWilders(result.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const updateData = () => {
		fetchData();
	};

	return (
		<main className={styles.container}>
			<div className={styles["add-container"]}>
				<AddWilder />
				<AddSkill update={updateData} />
				<UpdateSkill update={updateData} />
			</div>
			<h2 className={styles["category-title"]}>Wilders</h2>
			<section className={styles["card-row"]}>
				{wilders.map((wilder) => {
					return (
						<Wilder
							key={wilder.id}
							id={wilder.id}
							name={wilder.name}
							skills={wilder.skills}
						/>
					);
				})}
			</section>
		</main>
	);
}

export default Home;
