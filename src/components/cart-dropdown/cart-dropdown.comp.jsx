import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

import CartItem from '../cart-item/cart-item.comp';
import Button from '../button/button.comp';

import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './cart-dropdown.styles';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>go to checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
