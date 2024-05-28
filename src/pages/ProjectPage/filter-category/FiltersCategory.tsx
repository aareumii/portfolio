import styles from './FiltersCategory.module.scss';
import CategoryTab from './category-tab/CategoryTab';
import { CategoriesName } from '../../../store/categories/categories.type';

const FiltersCategory = () => {
	return (
		<div className={styles.filter_category}>
			<CategoryTab
				text={'WEB-PUBLISH'}
				categoryName={CategoriesName.webpublish}
			/>
			<CategoryTab
				text={'REACT-PROJECTS'}
				categoryName={CategoriesName.reactproject}
			/>
			<CategoryTab
				text={'REACT-NATIVE'}
				categoryName={CategoriesName.reactnative}
			/>
		</div>
	);
};

export default FiltersCategory;
