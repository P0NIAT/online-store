import { useState } from 'react';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.comp';
import FormInput from '../form-input/form-input.comp';

import './sign-in-form.styles.scss';

const defaultFormField = {
	email: '',
	password: '',
};

const SingInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormField);
	const { email, password } = formFields;

	const signInWithGoogle = async () => {
		const response = await signInWithGooglePopup();
		createUserDocumentFromAuth(response.user);
	};

	const resetFormFields = () => {
		setFormFields(defaultFormField);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);

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
					<Button type='button' onClick={signInWithGoogle} buttonType='google'>
						google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SingInForm;
