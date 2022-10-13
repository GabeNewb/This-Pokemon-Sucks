import { capitalize } from '@lib';
import { COPY } from '@constants';
import { PokeballRating } from './PokeballRating';
import styles from '@styles/components/ReviewBox.module.scss';
import { Row, Typography } from 'antd';

const { Title } = Typography;

export interface ReviewBoxProps {
	excerpt: string;
	rating: number;
}

export const ReviewBox: React.FC<ReviewBoxProps> = ({ excerpt, rating }) =>
	<div className={ styles.box }>
		<Title className={ styles.title } level={ 2 }>{ COPY.BOTTOM_LINE }</Title>

		<Row className={ styles.rating }>
			<PokeballRating rating={ rating }/>
			<Title className={ styles.excert } italic level={ 1 }>{ `"${capitalize(excerpt)}"` }</Title>
		</Row>
	</div>;
