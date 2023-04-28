import styles from "../styles/components/Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p>&copy; 2022 Wild Code School</p>
			</div>
		</footer>
	);
}

export default Footer;
