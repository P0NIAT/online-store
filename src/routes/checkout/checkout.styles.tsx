import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
	width: 100%;
	min-height: 90vh;

	.checkout-header {
		width: 100%;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid darkgrey;

		.header-block {
			text-transform: capitalize;
		}
	}

	.total {
		margin-top: 30px;
		margin-left: auto;
		font-size: 36px;
	}

	@media (min-width: 576px) {
		width: 85%;
		.checkout-header {
			.header-block {
				width: 23%;

				&:last-child {
					width: 8%;
				}
			}
		}
	}

	@media (min-width: 768px) {
		width: 65%;
	}
`;
