/* eslint-disable jsx-a11y/alt-text */
import { ArrowLeftOutlined } from '@ant-design/icons';
import { COPY } from '@constants';
import { ParsedUrlQuery } from 'querystring';
import styles from '@styles/pages/[slug].module.scss';
import { useOutsideClickListener } from 'components/hooks';
import { useRouter } from 'next/router';
import { Avatar, ReviewBox, StyledDatoCMSImage } from '@components';
import { getAllReviewsWithSlugs, getReview, loadSinglePokemon, markdownToHtml } from '@lib';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Pokemon, Review } from '@types';
import React, { useCallback, useEffect, useState } from 'react';
import { Row, Typography } from 'antd';

const { Text, Title } = Typography;

interface Params extends ParsedUrlQuery {
	slug: string;
}

type PokemonProps = {
	pokeApiPokemon: Pokemon;
	review: Review;
};

export const getStaticPaths: GetStaticPaths = async() => {
	const allReviews = await getAllReviewsWithSlugs();

	return {
		fallback: true,
		paths: allReviews?.map((review) => `/pokemon/${review.slug}`) || []
	};
};

export const getStaticProps: GetStaticProps<PokemonProps, Params> = async(context) => {
	const { params, preview = false } = context;
	const { slug } = params!;
	const data = await getReview(slug, preview);
	const content = await markdownToHtml(data?.content || '');
	const pokeApiPokemon = await loadSinglePokemon({ name: data?.pokemon.name || '' });

	return {
		props: {
			pokeApiPokemon,
			preview,
			review: {
				...data,
				content
			}
		}
	};
};

const Pokemon: NextPage<{
	pokeApiPokemon: Pokemon;
	preview: boolean;
	review: Review;
}> = ({ pokeApiPokemon, review }) => {
	const router = useRouter();
	const [ routeAway, setRouteAway ] = useState(false);
	const ref = React.useRef<HTMLDivElement>(null);

	const handleOnClick = useCallback(
		() => {
			if (routeAway) {
				router.push('/');
			}
		}, [ routeAway, router ]
	);

	useEffect(() => {
		if (routeAway) {
			handleOnClick();
		}
	}, [ handleOnClick, routeAway ]);


	useOutsideClickListener(ref, setRouteAway);

	if (!review) {
		handleOnClick();

		return null;
	}

	const { author, content, cover, excerpt, rating, title } = review;
	const { name, picture: authorImage } = author;
	const { types } = pokeApiPokemon;
	const { primary, secondary } = types;

	return (
		<div className={ styles.container } ref={ ref }>
			<Row className={ styles.header } justify='space-between'>
				<ArrowLeftOutlined className={ styles.back } onClick={ setRouteAway.bind(this, true) } />

				<Text className={ styles.label }>{ COPY.POKEMON_REVIEW }</Text>
			</Row>

			<Row className={ styles.titleRow }>
				<Title className={ styles.title }>{ title }</Title>

				<Avatar name={ name } authorImage={ authorImage.responsiveImage } />
			</Row>

			<hr />

			<StyledDatoCMSImage
				className={ styles.cover }
				data={ cover.responsiveImage }
				primary={ primary }
				secondary={ secondary }/>

			<div className={ styles.review } dangerouslySetInnerHTML={ { __html: content } } />

			<ReviewBox excerpt={ excerpt } rating={ rating } />
		</div>
	);
};

export default Pokemon;
