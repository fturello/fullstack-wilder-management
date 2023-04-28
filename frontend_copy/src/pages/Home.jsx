import { useEffect, useState } from "react";
import axios from "axios";

import AddWilder from "../components/AddWilder.jsx";
import AddSkill from "../components/AddSkill.jsx";
import UpdateSkill from "../components/UpdateSkill.jsx";
import Wilder from "../components/Wilder.jsx";

import styles from "../styles/pages/Home.module.css";

function Home() {
	const [wilders, setWilders] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get("http://localhost:5000/api/wilder");
			setWilders(result.data);
		};
		fetchData();
	}, []);

	return (
		<main className={styles.container}>
			<div className={styles["add-container"]}>
				<AddWilder />
				<AddSkill />
				<UpdateSkill />
			</div>
			<h2 className={styles["category-title"]}>Wilders</h2>
			<section className={styles["card-row"]}>
				{wilders.map((wilder) => {
					return (
						<Wilder
							key={wilder.id}
							name={wilder.name}
							skills={wilder.skills}
							id={wilder.id}
						/>
					);
				})}
			</section>
		</main>
	);
}

export default Home;
