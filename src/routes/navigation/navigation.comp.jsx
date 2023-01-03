import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/user.contex';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					{!currentUser ? (
						<Link className='nav-link' to='/'>
							SIGN IN
						</Link>
					) : (
						<Link className='nav-link' onClick={signOutUser} to='/auth'>
							SIGN OUT
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
