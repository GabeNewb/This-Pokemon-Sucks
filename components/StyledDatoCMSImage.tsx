import { Image } from 'react-datocms';
import { PokemonColors } from '@types';
import styled from 'styled-components';

export const StyledDatoCMSImage = styled(Image)<PokemonColors>`
&::before{
	background-color: ${(props) => props.primary};
	clip-path: polygon(0 0, 100% 0, 100% 100%);
	content: 'a';
	color: rgba(0,0,0,0);
	height: 360px;
	position: absolute;
	width: 430px;
	top: 0;
	z-index: 0;
}
&::after{
	background-color: ${(props) => props.secondary};
	clip-path: polygon(0 0, 0 100%, 100% 100%);
	content: 'a';
	color: rgba(0,0,0,0);
	height: 360px;
	position: absolute;
	top: 0;
	width: 430px;
	z-index: -1;
}
`;
