import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './SkillItem.module.scss';
import { skills } from '../../../../content/skills';
import { Skill } from '../../../../types';

const categories: Record<string, Skill[]> = {
	Programming: skills.filter((skill) => skill.category === 'Programming'),
	Design: skills.filter((skill) => skill.category === 'Design'),
	Collaboration: skills.filter((skill) => skill.category === 'Collaboration'),
};

const SkillItem = () => {
	const [expandedItems, setExpandedItems] = useState<{
		[key: number]: boolean;
	}>({});

	const toggleContent = (id: number) => {
		setExpandedItems((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}));
	};

	return (
		<div className={styles.skills_container}>
			{Object.keys(categories).map((category) => (
				<div key={category} className={styles.category_section}>
					<h3>{category}</h3>

					{categories[category].map((skill) => (
						<div key={skill.id} className={styles.skill_item_wrapper}>
							<div className={styles.skill_item}>
								<img src={skill.image} alt={skill.skills} />
								<div className={styles.skill_description}>
									<h3>{skill.skills}</h3>
									{expandedItems[skill.id] && (
										<div className={styles.skill_content}>
											<span>{skill.content}</span>
										</div>
									)}
								</div>
								<button onClick={() => toggleContent(skill.id)}>
									{expandedItems[skill.id] ? <FaMinus /> : <FaPlus />}
								</button>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default SkillItem;
