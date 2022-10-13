import { Card } from 'antd';
import { PokemonColors } from '@types';
import styled from 'styled-components';

export const StyledCard = styled(Card)<PokemonColors>`
&::before{
	background-color: ${(props) => props.primary};
	clip-path: polygon(0 0, 100% 0, 100% 100%);
	content: 'a';
	color: rgba(0,0,0,0);
	height: 388px;
	position: absolute;
	width: 308px;
	top: 58px;
	z-index: -1;
}
&::after{
	background-color: ${(props) => props.secondary};
	clip-path: polygon(0 0, 0 100%, 100% 100%);
	content: 'a';
	color: rgba(0,0,0,0);
	height: 388px;
	position: absolute;
	top: 58px;
	width: 308px;
	z-index: -1;
}
`;
