import { useEffect, useState } from "react";

import { WilderProps, WilderFromAPI } from "../interfaces.ts";
import { wilderApi } from "../../services/axiosInstance.ts";
import AddWilder from "../components/AddWilder.jsx";
import AddSkill from "../components/AddSkill.jsx";
import UpdateSkill from "../components/UpdateSkill.jsx";
import Wilder from "../components/Wilder.jsx";

import styles from "../styles/pages/Home.module.css";

function Home() {
	const [wilders, setWilders] = useState<WilderProps[]>([]);

	const fetchData = async () => {
		const result = await wilderApi.get<WilderFromAPI[]>("");

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
				<AddWilder update={updateData} />
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
