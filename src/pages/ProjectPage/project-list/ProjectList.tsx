import { useSelector } from 'react-redux';
import { HiArrowLongRight } from 'react-icons/hi2';
import { projects } from '../../../content/projects';
import styles from './ProjectList.module.scss';
import FiltersCategory from '../filter-category/FiltersCategory';
import { RootState } from '../../../store';
import { Project, CategoriesName } from '../../../types';

const ProjectList: React.FC = () => {
	const activeCategory = useSelector(
		(state: RootState) => state.categories.activeCategory
	);

	const filteredProjects: Project[] =
		projects[activeCategory as unknown as CategoriesName] || [];

	return (
		<div className={styles.wrap}>
			<div className={styles.list_wrap}>
				<h2>Project.</h2>
				<FiltersCategory />
				<ul>
					{filteredProjects.map((project) => (
						<li key={project.id} className={styles.list_item}>
							<h2>0{project.id}</h2>
							<div className={styles.list_title}>
								<h3>{project.title}</h3>
								<p>skills: {project.skills}</p>
								<p>{project.name}</p>
							</div>
							<div className={styles.view}>
								<a href={project.link}>view</a>
								<HiArrowLongRight size={30} />
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProjectList;
