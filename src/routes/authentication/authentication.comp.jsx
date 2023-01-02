import SingUpForm from '../../components/sign-up-form/sign-up-form.comp';
import SingInForm from '../../components/sign-in-form/sign-in-form.comp';

import './authentication.styles.scss'

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SingInForm />
			<SingUpForm />
		</div>
	);
};

export default Authentication;
