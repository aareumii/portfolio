import { Link } from 'react-router-dom';
import styles from './HomeNav.module.scss';

const HomeNav = () => {
	return (
		<div className={styles.home}>
			<div className={styles.nav}>
				<div className={styles['text-container']}>
					<div className={styles.kimahreum}>
						<p>K</p>
						<p>i</p>
						<p>m</p>
						<p>a</p>
						<p>h</p>
						<p>r</p>
						<p>e</p>
						<p>u</p>
						<p>m</p>
					</div>
					<div className={styles.portfolio}>
						<p>P</p>
						<p>o</p>
						<p>r</p>
						<p>t</p>
						<p>f</p>
						<p>o</p>
						<p>l</p>
						<p>i</p>
						<p>o</p>
					</div>
				</div>
				<ul>
					<li>
						<Link to={'/about'}>ABOUT.</Link>
					</li>
					<li>
						<Link to={'/project'}>PROJECT.</Link>
					</li>
					<li>
						<Link to={'/skills'}>SKILLS.</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomeNav;
