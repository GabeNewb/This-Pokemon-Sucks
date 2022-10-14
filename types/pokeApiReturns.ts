interface PokeSprites {
	front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png';
}

export interface DetailedPokeApiPokemon {
	id: number;
	name: string;
	sprites: PokeSprites;
	types: Array<PokeType>;
}

export interface BasicPokeApiPokemon {
	id: number;
	name: string;
	url: string;
}

export interface PokeType {
	slot: number;
	type: {
		name: string;
		url: string;
	}
}
