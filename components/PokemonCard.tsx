import { capitalize } from '@lib';
import classNames from 'classnames';
import { COPY } from '@constants';
import Image from 'next/image';
import { PokeballRating } from './PokeballRating';
import { StyledCard } from './StyledCard';
import styles from '@styles/components/pokemonCard.module.scss';
import { Typography } from 'antd';
import { useRouter } from 'next/router';
import { When } from 'react-if';
import { Pokemon, Review } from '@types';

const { Text } = Typography;

export interface PokemonCardProps {
	pokemon: Pokemon;
	review?: Review;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, review }) => {
	const router = useRouter();

	const {
		id,
		name,
		sprite,
		types
	} = pokemon;
	const { primary, secondary } = types;
	const rating = review?.rating ?? 0;

	const handleOnClick = () => {
		if (review) {
			router.push(`pokemon/${review.slug}`);
		}
	};

	const cardStyles = classNames(styles.card, {
		[ styles.reviewed ]: review
	});


	const statusClassName = classNames({
		[ styles.unreviewed ]: !review
	});

	const pokemonIdElement = <Text>{ COPY.POKEMON_ID(id) }</Text>;

	const titleElement = <>
		<Text className={ styles.title }>{ capitalize(name) }</Text>
	</>;


	return (
		<StyledCard
			primary={ primary }
			secondary={ secondary }
			className={ cardStyles }
			extra={ pokemonIdElement }
			onClick={ handleOnClick }
			title={ titleElement } >
			<div className={ styles.review }>
				<When condition={Boolean(review)}>
					<Text className={ styles.excerpt }>{`'${review?.excerpt}'`}</Text>
				</When>
			</div>
			<Image
				alt={ COPY.POKEMON_IMAGE_HELP_TEXT(name) }
				className={ statusClassName }
				height={ 275 }
				src={ sprite }
				width={ 275 }
			/>
			<When condition={ Boolean(review) }>
				<div className={ styles.pokeballPlacement }>
					<PokeballRating rating={ rating } />
				</div>
			</When>
		</StyledCard>
	);
};
