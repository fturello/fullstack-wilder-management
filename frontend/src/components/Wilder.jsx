import axios from "axios";

import Skill from "./Skill";

import styles from "../styles/components/Wilder.module.css";

import profile from "../assets/profile.png";

const handleDelete = (id) => {
	axios.delete(`http://localhost:5000/api/wilder/${id}`);
};

const Wilder = ({ name, skills, id }) => {
	return (
		<article className={styles.card}>
			<img src={profile} alt='Default profile picture' />
			<button onClick={() => handleDelete(id)}>Delete</button>
			<h3>{name}</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
			<h4>Wild Skills</h4>
			<ul className={styles.skills}>
				{/* {skills.map((skill) => (
					<Skill name={skill.name} votes={skill.votes} key={skill.id} />
				))} */}
			</ul>
		</article>
	);
};

export default Wilder;
