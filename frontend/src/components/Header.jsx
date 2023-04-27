import styles from "../styles/components/Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1>Wilders Book</h1>
			</div>
		</header>
	);
}

export default Header;
