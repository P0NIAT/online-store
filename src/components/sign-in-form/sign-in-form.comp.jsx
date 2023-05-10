import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	emailSingStart,
	googleSignInStart,
} from '../../store/user/user.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.comp';
import FormInput from '../form-input/form-input.comp';

import './sign-in-form.styles.scss';

const defaultFormField = {
	email: '',
	password: '',
};

const SingInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormField);
	const { email, password } = formFields;
	const dispatch = useDispatch();

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const resetFormFields = () => {
		setFormFields(defaultFormField);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			// await signInAuthUserWithEmailAndPassword(email, password);
			dispatch(emailSingStart(email, password));
			resetFormFields();
		} catch (err) {
			switch (err.code) {
				case 'auth/wrong-password':
					alert('Incorrect password for email!');
					break;

				case 'auth/user-not-found':
					alert('No user associated with this email!');
					break;

				default:
					console.log('Error signing the user: ', err.message);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					required
					label='Email'
					type='email'
					name='email'
					onChange={handleChange}
					value={email}
				/>

				<FormInput
					required
					label='Password'
					type='password'
					name='password'
					onChange={handleChange}
					value={password}
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						onClick={signInWithGoogle}
						buttonType={BUTTON_TYPE_CLASSES.google}>
						google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SingInForm;
