import styled from 'styled-components';

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin-bottom: 50px;

	@media (min-width: 576px) {
		display: flex;
		flex-direction: column;
		width: 380px;
		margin-bottom: 50px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (min-width: 576px) {
		display: flex;
		flex-direction: row;
	}
`;
