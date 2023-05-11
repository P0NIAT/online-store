import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormInput from '../form-input/form-input.comp';
import Button from '../button/button.comp';

import './sing-up-form.styles.scss';
import { useDispatch } from 'react-redux';
import { singUpStart } from '../../store/user/user.action';

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

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			dispatch(singUpStart(email, password, displayName));
			resetFormFields();
			navigate('/');
		} catch (err) {
			if (err.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log(err.message);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
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

				<Button type='submit'>Submit</Button>
			</form>
		</div>
	);
};

export default SingUpForm;
