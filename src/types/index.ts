// src/types/index.ts

export interface Project {
	id: number;
	title: string;
	skills: string;
	name: string;
	link: string;
}

export enum CategoriesName {
	All = 'All',
	webpublish = 'webpublish',
	reactproject = 'reactproject',
	reactnative = 'reactnative',
}

export interface Projects {
	[key: string]: Project[];
}

export interface Skill {
	id: number;
	skills: string;
	percent: string;
	content: string;
	image: string;
	category: 'Programming' | 'Design' | 'Collaboration';
}
