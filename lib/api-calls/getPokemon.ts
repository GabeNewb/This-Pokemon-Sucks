import { NUMBERS, UTILITY } from '@constants';

export type PokemonSearchRequest = {
	name?: string;
	url?: string;
};

export async function getPokemon<T>(request: PokemonSearchRequest): Promise<T> {
	const { name = '', url } = request;
	const pokeApiUrl = url ? url : UTILITY.POKE_API(name.toLowerCase(), NUMBERS.KANTO_MAX);

	const result = await fetch(pokeApiUrl);
	const resultObject = (await result.json()) as T;

	return resultObject;
}
