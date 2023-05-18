import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

import FormInput from '../form-input/form-input.comp';
import Button from '../button/button.comp';
import { singUpStart } from '../../store/user/user.action';

import { SignUpContainer, ButtonContainer } from './sing-up-form.styles';

const defaultFormField = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SingUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormField);
	const { displayName, email, password, confirmPassword } = formFields;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const resetFormFields = () => {
		setFormFields(defaultFormField);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			dispatch(singUpStart(email, password, displayName));
			resetFormFields();
			navigate('/');
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Cannot create user, email already in use');
			} else {
				console.log('Creating user encountered an error', error);
			}
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					required
					type='text'
					name='displayName'
					onChange={handleChange}
					value={displayName}
				/>

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

				<FormInput
					required
					label='Confirm Password'
					type='password'
					name='confirmPassword'
					onChange={handleChange}
					value={confirmPassword}
				/>
				<ButtonContainer>
					<Button type='submit'>Submit</Button>
				</ButtonContainer>
			</form>
		</SignUpContainer>
	);
};

export default SingUpForm;
