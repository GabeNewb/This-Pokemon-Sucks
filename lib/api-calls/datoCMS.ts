import { Review } from '@types';

const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.DATOCMS_READONLY_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
export const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

export interface Options {
	variables?: unknown;
	preview?: boolean;
}
export async function fetchAPI(query: string, { variables, preview }: Options = {}) {
	const res = await fetch(API_URL + (preview ? '/preview' : ''), {
		body: JSON.stringify({
			query,
			variables
		}),
		headers: {
			Authorization: `Bearer ${API_TOKEN}`,
			'Content-Type': 'application/json'
		},
		method: 'POST'
	});

	const json = await res.json();

	if (json.errors) {
		throw new Error('Failed to fetch API');
	}

	return json.data;
}

export async function getAllReviewsHome(preview: boolean) {
	const data = await fetchAPI(
		`
    {
      allReviews {
        id
        title
        pokemon { name }
        rating
        excerpt
        author { name }
        slug
      }
    }
  `,
		{ preview }
	);

	return data?.allReviews as Review[];
}

export async function getAllReviewsWithSlugs() {
	const data = await fetchAPI(
		`
    {
      allReviews {
        slug
      }
    }
  `
	);

	return data?.allReviews as Array<Partial<Review>>;
}

export async function getReview(slug: string, preview: boolean) {
	const data = await fetchAPI(
		`
    query ReviewBySlug($slug: String) {
      review(filter: {slug: {eq: $slug}}) {
        content
        cover {
          responsiveImage(imgixParams: { fit: crop, w: 425, h: 350 }) {
            ...responsiveImageFragment
          }
        }
        title
        pokemon {
          name
        }
        rating
        excerpt
        author {
          name
          picture {
            responsiveImage(imgixParams: { fit: crop, w: 100, h: 100 }) {
              ...responsiveImageFragment
            }
          }
        }
        slug
      }
    }

    ${responsiveImageFragment}
  `,
		{
			preview,
			variables: {
				slug
			}
		}
	);

	return data?.review as Review;
}
