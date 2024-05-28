import { useDispatch, useSelector } from 'react-redux';
import { CategoriesName } from '../../../../store/categories/categories.type';
import { RootState, AppDispatch } from '../../../../store';
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import styles from './CategoryTab.module.scss';

interface CategoryTabProps {
	text: string;
	categoryName: CategoriesName;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ text, categoryName }) => {
	const dispatch = useDispatch<AppDispatch>();
	const activeCategory = useSelector(
		(state: RootState) => state.categories.activeCategory
	);
	const handleCategoryChange = () => {
		dispatch(setActiveCategory(categoryName));
	};
	return (
		<button
			className={
				categoryName === activeCategory
					? styles.active_category
					: styles.category_button
			}
			onClick={handleCategoryChange}
		>
			<h3>{text}</h3>
		</button>
	);
};

export default CategoryTab;
