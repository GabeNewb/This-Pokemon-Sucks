import Head from 'next/head'
import InfiniteScroll from "react-infinite-scroll-component";
import { loadPokemon } from 'lib/loadPokemon';
import type { NextPage } from 'next'
import { Pokemon } from '@types';
import { PokemonThumbnail } from '../components/pokemonThumbnail';
import styles from '@styles/Home.module.css'
import { COPY, NUMBERS } from '@constants';
import { useCallback, useEffect, useState } from 'react';

export async function getStaticProps(): Promise<{
		props: {
			nextBulkPokemonUrl: string;
			pokeMap: Array<Pokemon>;
		}
}> {
	const props = await loadPokemon();

    return { props };
}

const Home: NextPage<{
	nextBulkPokemonUrl: string;
	pokeMap: Array<Pokemon>; 
}> = ({ nextBulkPokemonUrl, pokeMap }) => {
	const [ pokemonArray, setPokemonArray ] = useState<Array<Pokemon>>(pokeMap);
	const [ bulkPokemonUrl, setBulkPokemonUrl ] = useState(nextBulkPokemonUrl);
	const [ hasMorePokemon, setHasMorePokemon ] = useState(pokemonArray.length < 151);

	useEffect(() => {
		const pokemonArrayLength = pokemonArray.length;
		if (pokemonArrayLength > NUMBERS.KANTO_MAX) {
			setHasMorePokemon(pokemonArray.length < NUMBERS.KANTO_MAX);
			setPokemonArray(pokemonArray.slice(0, NUMBERS.KANTO_MAX));
		}
	}, [ pokemonArray ]);

	const loadMorePokemon = useCallback(async() => {
		const {
			pokeMap: loadedPokemon,
			nextBulkPokemonUrl: nextPokemonUrl
		} = await loadPokemon(bulkPokemonUrl);
	
		setPokemonArray(() => [ ...pokemonArray, ...loadedPokemon ])
		setBulkPokemonUrl(nextPokemonUrl);
	}, [ bulkPokemonUrl, pokemonArray ]);
	
	return (
		<div>
			<Head>
				<title>{COPY.TITLE}</title>
			</Head>

			<main className={ styles.main }>
				<header className={ styles.title }>
					<p>{ COPY.DESCRIPTION }</p>
				</header>

				<section>
					<InfiniteScroll
						className={styles.wrapper}
						dataLength={ pokemonArray.length }
						next={ loadMorePokemon }
						hasMore={ hasMorePokemon }
						loader={ <h3> Loading...</h3> }
						endMessage={ <h4>Nothing more to show</h4> }>
						{
							pokemonArray.map((pokemon) => <PokemonThumbnail key= { pokemon.id } pokemon={ pokemon } />)
						}
					</InfiniteScroll>
				</section>
			</main>
		</div>
	);
}

export default Home
