import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories.slice';

export const store = configureStore({
	reducer: {
		categories: categoriesReducer, // Ensure this matches what you use in useSelector
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
