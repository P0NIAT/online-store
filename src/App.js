import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.comp';
import Navigation from './routes/navigation/navigation.comp';
import SignIn from './routes/sign-in/sign-in.comp';

const Shop = () => {
	return <h1>This is Shop Page</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
