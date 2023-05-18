import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';

import CartIcon from '../../components/card-icon/cart-icon.comp';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.comp';

import {
	NavigationContainer,
	LogoContainer,
	NavLinksContainer,
	NavLink,
} from './navigation.styles';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch()

	const signOutUser = () => dispatch(signOutStart())

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
						<NavLink as='span' onClick={signOutUser}>
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
