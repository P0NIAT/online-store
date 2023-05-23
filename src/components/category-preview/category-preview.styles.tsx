import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
	margin-bottom: 50px;

	.title {
		font-size: 32px;
		margin-bottom: 25px;
		cursor: pointer;
	}

	.preview {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		row-gap: 30px;
	}

	@media (min-width: 576px) {
		.preview {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 20px;
		}
	}

	@media (min-width: 992px) {
		.preview {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 1200px) {
		.preview {
			grid-template-columns: repeat(4, 1fr);
		}
	}
`;
