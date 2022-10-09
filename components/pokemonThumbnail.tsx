import { capitalize } from '@lib';
import { Card } from 'antd';
import Image from 'next/image';
import { Pokemon } from '@types';
import React from 'react';
import styles from './pokemonThumbnail.module.css';

export interface PokemonThumbnailProps {
	pokemon: Pokemon;
}

export const PokemonThumbnail: React.FC<PokemonThumbnailProps> = ({ pokemon }) => {
    const { id, name, sprite } = pokemon;

    if (id > 150) {
        return null;
    }

	return (
        <Card className={ styles.card } extra={`#${id}`} title={ capitalize(name) }>
            <Image alt={`image of the Pokemon ${name}`} height={ 275 } src={ sprite } width={ 275 } />
        </Card>
    );
}