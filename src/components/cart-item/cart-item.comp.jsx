import { CartItemContainer, ItemDetails } from './cart-item.styles';
// import { CartItem } from '../../store/cart/cart.types';

const CartItem = ({ cartItem }) => {
	const { name, price, imageUrl, quantity } = cartItem;

	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<span className='name'>{name}</span>
				<span className='price'>{quantity} x &#163;{price} </span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
