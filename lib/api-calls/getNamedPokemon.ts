import { NUMBERS } from "@constants";
import { DetailedPokeApiPokemon } from "@types";

export type NamedPokemonSearchRequest = {
    name?: string;
    url?: string;
}

export async function getNamedPokemon(request: NamedPokemonSearchRequest): Promise<DetailedPokeApiPokemon> {
    const { name = '', url } = request; 
    const pokeApiUrl = url ? url : `https://pokeapi.co/api/v2/pokemon/${name}?limit=${NUMBERS.KANTO_MAX}`;
    
	const result = await fetch(pokeApiUrl);
    const resultObject = await result.json() as DetailedPokeApiPokemon;

	return resultObject;
}
