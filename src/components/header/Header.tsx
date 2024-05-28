import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
			<div className={styles.header_wrapper}>
				<Link to={'/'}>
					<h2>Kimahreum</h2>
				</Link>
				<Nav />
			</div>
		</div>
	);
};

export default Header;
