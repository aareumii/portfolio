import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesState, CategoriesName } from './categories.type';

const initialState: CategoriesState = {
	activeCategory: CategoriesName.webpublish,
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setActiveCategory: (state, action: PayloadAction<CategoriesName>) => {
			state.activeCategory = action.payload;
		},
	},
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
