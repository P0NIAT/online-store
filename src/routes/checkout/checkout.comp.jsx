import { useSelector } from 'react-redux';
import {
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.comp';
import PaymentForm from '../../components/payment-form/payment-form.comp';

import {CheckoutContainer} from './checkout.styles';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<CheckoutContainer>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>

			{cartItems.map((cartItem) => {
				return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
			})}

			<span className='total'>Total: &#163;{cartTotal}</span>
			<PaymentForm />
		</CheckoutContainer>
	);
};

export default Checkout;
