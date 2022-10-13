import classNames from 'classnames';
import { RATING_CATEGORY } from '@constants';
import styles from '@styles/components/pokeballRating.module.scss';
import { Typography } from 'antd';

const { Text } = Typography;

export interface PokeballRatingProps {
	rating: number;
}
const determineRatingCategory = (ratingNumber: number): RATING_CATEGORY => {
	if (ratingNumber > 9) {
		return RATING_CATEGORY.Excellent;
	} else if (ratingNumber > 6) {
		return RATING_CATEGORY.Good;
	} else if (ratingNumber > 3) {
		return RATING_CATEGORY.Ok;
	}

	return RATING_CATEGORY.Poor;
};

export const PokeballRating: React.FC<PokeballRatingProps> = ({ rating }) => {
	const ratingCategory = determineRatingCategory(rating);

	const ratingBasedClassName = classNames({
		[ styles.excellent ]: ratingCategory === RATING_CATEGORY.Excellent,
		[ styles.good ]: ratingCategory === RATING_CATEGORY.Good,
		[ styles.ok ]: ratingCategory === RATING_CATEGORY.Ok,
		[ styles.poor ]: ratingCategory === RATING_CATEGORY.Poor
	});

	const containerClassName = classNames(styles.container, ratingBasedClassName);

	const ratingClassName = classNames(styles.rating, {
		[ styles[ 'single-digit-shift' ] ]: ratingCategory < 3
	});

	return (
		<div className={styles.pokeball}>
			<div className={containerClassName}>
				<Text className={ratingClassName}>{rating}</Text>
			</div>
		</div>
	);
};
