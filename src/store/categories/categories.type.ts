export enum CategoriesName {
	All = '',
	webpublish = 'webpublish',
	reactproject = 'reactproject',
	reactnative = 'reactnative',
}

export interface CategoriesState {
	activeCategory: CategoriesName;
}
