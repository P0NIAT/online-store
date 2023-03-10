import styled from 'styled-components'

export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Fira Sans Extra Condensed', sans-serif;
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	transition: background-color 0.5s, color 0.5s;
	
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
` 

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;
	transition: background-color 0.5s, color 0.5s;

	&:hover {
		background-color: white;
	color: #4285f4;
	border: 1px solid #4285f4;
	}
`

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
`