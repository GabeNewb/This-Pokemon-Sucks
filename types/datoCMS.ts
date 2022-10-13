import { ResponsiveImageType } from 'react-datocms';

export interface Review {
	author: {
		name: string;
		picture: {
			responsiveImage: ResponsiveImageType;
		};
	};
	content: string;
	cover: {
		responsiveImage: ResponsiveImageType;
	};
	date: string;
	excerpt: string;
	id: string;
	pokemon: { name: string; picture: ResponsiveImageType };
	rating: number;
	slug: string;
	title: string;
}
