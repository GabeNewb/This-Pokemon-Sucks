import { capitalize } from './string';
import {
	BasicPokeApiPokemon,
	DetailedPokeApiPokemon,
	Pokemon,
	PokemonResultsPagination,
	PokemonTypeToColor
} from '@types';
import { getPokemon, PokemonSearchRequest } from './api-calls';

const formatPokemon = (pokemon: DetailedPokeApiPokemon): Pokemon => {
	const { id, name, sprites, types } = pokemon;

	const colors = types.map((type) => type.type.name);
	const typeOne = capitalize(colors[ 0 ]);
	const primary = PokemonTypeToColor[ typeOne as keyof typeof PokemonTypeToColor ];
	const typeTwo = colors.length > 1 ? capitalize(colors[ 1 ]) : capitalize(colors[ 0 ]);
	const secondary = PokemonTypeToColor[ typeTwo as keyof typeof PokemonTypeToColor ];

	const formattedPokemon: Pokemon = {
		id,
		name,
		sprite: sprites.front_default,
		types: {
			primary,
			secondary
		}
	};

	return formattedPokemon;
};

export async function loadSinglePokemon(request: PokemonSearchRequest): Promise<Pokemon> {
	const { name, url } = request;
	const pokemonBaseResponse = await getPokemon<DetailedPokeApiPokemon>({
		name: name,
		url
	});

	const formattedPokemon = formatPokemon(pokemonBaseResponse);

	return formattedPokemon;
}

export async function loadAllPokemon(url?: string): Promise<Array<Pokemon>> {
	const pokemonBaseResponse = await getPokemon<PokemonResultsPagination<BasicPokeApiPokemon>>({
		url
	});

	const pokeMap = [];

	for (const pokeResult of pokemonBaseResponse.results) {
		const pokemon = await loadSinglePokemon({ url: pokeResult.url });

		pokeMap.push(pokemon);
	}

	return pokeMap;
}
