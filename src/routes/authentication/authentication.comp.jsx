import SingUpForm from '../../components/sign-up-form/sign-up-form.comp';
import SingInForm from '../../components/sign-in-form/sign-in-form.comp';

import {AuthenticationContainer} from './authentication.styles'

const Authentication = () => {
	return (
		<AuthenticationContainer>
			<SingInForm />
			<SingUpForm />
		</AuthenticationContainer>
	);
};

export default Authentication;
