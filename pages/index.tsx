import { capitalize } from '@lib';
import { COPY } from '@constants';
import { getAllReviewsHome } from 'lib/api-calls/datoCMS';
import Head from 'next/head';
import { loadAllPokemon } from 'lib/loadPokemon';
import type { NextPage } from 'next';
import { PokemonCard } from '@components';
import styles from '@styles/pages/Home.module.scss';
import { Typography } from 'antd';
import { useMemo } from 'react';
import { Pokemon, Review } from '@types';

const { Title } = Typography;

export async function getStaticProps(): Promise<{
	props: {
		pokeMap: Array<Pokemon>;
		datoCMSProps: Array<Review>;
	};
}> {
	const datoCMSProps = await getAllReviewsHome(false);
	const pokeMap = await loadAllPokemon();

	return { props: {
		datoCMSProps,
		pokeMap
	} };
}

const Home: NextPage<{
	datoCMSProps: Array<Review>;
	pokeMap: Array<Pokemon>;
}> = ({ datoCMSProps, pokeMap }) => {
	const pokeLookup: Record<string, Review> = useMemo(
		() =>
			datoCMSProps.reduce((map: Record<string, Review>, review: Review) => {
				map[ review.pokemon.name ] = review;

				return map;
			}, {}),
		[ datoCMSProps ]
	);

	return (
		<div className={ styles.container }>
			<Head>
				<title>{ COPY.TITLE }</title>
			</Head>

			<main>
				<header className={ styles.header }>
					<Title className={ styles.title } level={ 1 }>{ COPY.THIS_POKEMON_SUCKS }</Title>
					<Title className={ styles.description } level={ 3 }>{ COPY.DESCRIPTION }</Title>
					<Title className={ styles.about } level={ 4 } type='secondary'>{ COPY.ABOUT_TEXT }</Title>
				</header>

				<section className={styles.wrapper }>
					{pokeMap.map((pokemon) => {
						const { id, name } = pokemon;
						if (id > 150) {
							return null;
						}

						const review = pokeLookup[ capitalize(name) ];

						return <PokemonCard key={ pokemon.id } review={ review } pokemon={ pokemon } />;
					})}
				</section>
			</main>
		</div>
	);
};

export default Home;
