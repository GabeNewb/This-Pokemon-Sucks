/* eslint-disable jsx-a11y/alt-text */
import { COPY } from '@constants';
import styles from '@styles/components/avatar.module.scss';
import { Typography } from 'antd';
import { Image, ResponsiveImageType } from 'react-datocms';

const { Text } = Typography;

export interface AvatarProps {
	authorImage: ResponsiveImageType;
	name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name, authorImage }) =>
	<div className={ styles.author }>
		<Image className={ styles.avatar } data={ authorImage } />
		<Text className={ styles.text }>{ COPY.REVIEWED_BY }</Text>
		<Text className={ styles.text }>{ name }</Text>
	</div>;
