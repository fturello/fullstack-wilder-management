import axios from "axios";

import Skill from "./Skill";

import styles from "../styles/components/Wilder.module.css";

import profile from "../assets/profile.png";

const handleDelete = (id) => {
	axios.delete(`http://localhost:5000/api/wilder/${id}`);
};

const Wilder = ({ name, skills, id }) => {
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
						<Skill key={skill.id} name={skill.name} />
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
