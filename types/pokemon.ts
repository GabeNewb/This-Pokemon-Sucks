import { TypeToColorString } from './pokeApiReturns';

export interface PokemonColors {
    primary: TypeToColorString;
    secondary: TypeToColorString;
}

export interface Pokemon {
    id: number;
    name: string;
    sprite: string;
    types: PokemonColors;
}
