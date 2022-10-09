import { NUMBERS } from "@constants";
import { BasicPokeApiPokemon, PokemonResultsPagination } from "@types";

export type PokemonSearchRequest = {url?: string;}

export async function getPokemon(request: PokemonSearchRequest): Promise<PokemonResultsPagination<BasicPokeApiPokemon>> {
    const { url } = request; 
    const pokeApiUrl = url ? url : `https://pokeapi.co/api/v2/pokemon/?limit=${NUMBERS.KANTO_MAX}`;
    
	const result = await fetch(pokeApiUrl);
    const resultObject = await result.json() as PokemonResultsPagination<BasicPokeApiPokemon>;

	return resultObject;
}
