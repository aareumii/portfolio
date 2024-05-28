import { useState } from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	return (
		<div className={styles.nav}>
			<ul
				className={
					isActive ? `${styles.menu} ${styles.menuActive}` : styles.menu
				}
			>
				<li>
					<Link to={'/about'}>ABOUT</Link>
				</li>
				<li>
					<Link to={'/project'}>PROJECT</Link>
				</li>
				<li>
					<Link to={'/skills'}>SKILLS</Link>
				</li>
			</ul>
			<div
				className={
					isActive ? `${styles.hamburger} ${styles.active}` : styles.hamburger
				}
				onClick={toggleMenu}
			>
				{isActive ? (
					<div className={styles.hamburger} onClick={toggleMenu}>
						<div className={styles.bar}></div>
						<div className={styles.bar}></div>
						<div className={styles.bar}></div>
					</div>
				) : (
					'Menu'
				)}
			</div>
		</div>
	);
};

export default Nav;
