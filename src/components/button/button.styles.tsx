import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles.jsx';

export const BaseButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 35px 0 35px;
	min-width: 165px;
	width: auto;
	height: 50px;
	background-color: black;
	color: white;
	font-family: 'Fira Sans Extra Condensed', sans-serif;
	letter-spacing: 0.5px;
	line-height: 50px;
	font-size: 15px;
	text-transform: uppercase;
	font-weight: bolder;
	border: none;
	cursor: pointer;
	transition: background-color 0.5s, color 0.5s;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;
	transition: background-color 0.5s, color 0.5s;

	&:hover {
		background-color: white;
		color: #4285f4;
		border: 1px solid #4285f4;
	}
`;

export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 1px solid black;
	transition: background-color 0.5s, color 0.5s;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

export const ButtonSpinner = styled(SpinnerContainer)`
	width: 30px;
	height: 30px;
`;
