import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<p>© 2024 kimahreum.</p>
			<div className={styles.contacts}></div>
		</div>
	);
};

export default Footer;
