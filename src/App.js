import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.comp';
import Navigation from './routes/navigation/navigation.comp';
import Authentication from './routes/authentication/authentication.comp';
import Shop from './routes/shop/shop.comp';
import Checkout from './routes/checkout/checkout.comp';

import { useEffect } from 'react';

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
