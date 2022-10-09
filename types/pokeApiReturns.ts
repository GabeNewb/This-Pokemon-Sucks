interface PokeSprites {
    front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
}

export interface DetailedPokeApiPokemon {
    id: number;
    name: string;
    sprites: PokeSprites;
}

export interface BasicPokeApiPokemon {
    id: number;
    name: string;
    url: string;
}
