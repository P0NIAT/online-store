import styled from 'styled-components';

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	column-gap: 20px;
	row-gap: 30px;

	@media (min-width: 576px) {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 50px;
	}

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1200px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const CategoryTitle = styled.h2`
	font-size: 36px;
	margin-bottom: 25px;
	text-align: center;
`;
