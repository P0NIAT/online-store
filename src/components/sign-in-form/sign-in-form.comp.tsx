import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {emailSingInStart,googleSignInStart} from '../../store/user/user.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.comp';
import FormInput from '../form-input/form-input.comp';

import { ButtonsContainer, SignUpContainer } from './sign-in-form.styles'

const defaultFormField = {
	email: '',
	password: '',
};

const SingInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormField);
	const { email, password } = formFields;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
		setTimeout(() => {
			navigate('/');
		}, 5000);
	};

	const resetFormFields = () => {
		setFormFields(defaultFormField);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			dispatch(emailSingInStart(email, password));
			resetFormFields();
			navigate('/');
		} catch (err) {
			console.log('User sign in failed:', err);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
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
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						onClick={signInWithGoogle}
						buttonType={BUTTON_TYPE_CLASSES.google}>
						google sign in
					</Button>
				</ButtonsContainer>
			</form>
		</SignUpContainer>
	);
};

export default SingInForm;
