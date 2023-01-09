import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/user.contex';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/card-icon/cart-icon.comp';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.comp';

import {
	NavigationContainer,
	LogoContainer,
	NavLinksContainer,
	NavLink,
} from './navigation.styles';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo />
				</LogoContainer>
				<NavLinksContainer>
					<NavLink to='/shop'>SHOP</NavLink>
					{!currentUser ? (
						<NavLink to='/auth'>SIGN IN</NavLink>
					) : (
						<NavLink as='span' onClick={signOutUser} to='/auth'>
							SIGN OUT
						</NavLink>
					)}
					<CartIcon />
				</NavLinksContainer>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
