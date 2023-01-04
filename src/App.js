import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.comp';
import Navigation from './routes/navigation/navigation.comp';
import Authentication from './routes/authentication/authentication.comp';
import Shop from './routes/shop/shop.comp';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
