import { wilderApi } from "../../services/axiosInstance.ts";

import { WilderProps } from "../interfaces.ts";
import Skill from "./Skill";

import styles from "../styles/components/Wilder.module.css";

import profile from "../assets/profile.png";

const handleDelete = (id: number) => {
	wilderApi.delete(`/${id}`);
};

const Wilder = ({ id, name, skills }: WilderProps): JSX.Element => {
	return (
		<>
			<article className={styles.card}>
				<img
					src={profile}
					alt='Default profile picture'
					className={styles.avatar}
				/>
				<h3 className={styles.name}>{name}</h3>
				<p className={styles.desc}>
					Bacon ipsum dolor amet brisket drumstick doner shoulder t-bone. Jerky
					alcatra meatball chuck landjaeger pork belly flank. Kevin filet mignon
					hamburger rump fatback.
				</p>
				<h4>Wild Skills</h4>
				<ul className={styles.skills}>
					{skills.map((skill) => (
						<Skill key={skill.id} id={skill.id} name={skill.name} />
					))}
				</ul>
				<button
					onClick={() => handleDelete(id)}
					className={styles["btn-delete"]}
				>
					Remove Wilder
				</button>
			</article>
		</>
	);
};

export default Wilder;
