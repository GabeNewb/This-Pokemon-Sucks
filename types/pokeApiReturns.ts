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

export enum TypeToColorString {
	Bug = '#8cb230',
	Dark = '#58575f',
	Dragon = '#0f6ac0',
	Electric = '#eed535',
	Fairy = '#ed6ec7',
	Fighting = '#d04164',
	Fire = '#fd7d24',
	Flying = '#748fc9',
	Ghost = '#556aae',
	Grass = '#62b957',
	Ground = '#dd7748',
	Ice = '#61cec0',
	Normal = '#9da0aa',
	Poison = '#a552cc',
	Psychic = '#ea5d60',
	Rock = '#baab82',
	Steel = '#417d9a',
	Water =' #4a90da'
}
