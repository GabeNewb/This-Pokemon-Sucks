import { PokemonTypeToColor } from '.';

export interface PokemonColors {
    primary: PokemonTypeToColor;
    secondary: PokemonTypeToColor;
}

export interface Pokemon {
    id: number;
    name: string;
    sprite: string;
    types: PokemonColors;
}
