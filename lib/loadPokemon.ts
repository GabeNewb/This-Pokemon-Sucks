import { Pokemon } from "@types";
import { getNamedPokemon, getPokemon } from "./api-calls";

export async function loadPokemon(url?: string): Promise<{
    nextBulkPokemonUrl: string;
    pokeMap: Array<Pokemon>
}> {
    const pokemonBaseResponse = await getPokemon({url});

    const pokeMap = [];

    for (const pokeResult of pokemonBaseResponse.results) {
        const pokemon = await getNamedPokemon({url: pokeResult.url});

        const {id, name, sprites} = pokemon;

        const formattedPokemon: Pokemon = {
            id,
            name,
            sprite: sprites.front_default
        }

        pokeMap.push(formattedPokemon);
    };

    const pokeApiReturns = {
        nextBulkPokemonUrl: pokemonBaseResponse.next,
        pokeMap
    };

    return pokeApiReturns;
}

  