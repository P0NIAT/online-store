import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import {
	signInFailed,
	signOutFailed,
	signUpFailed,
	singInSuccess,
	signOutSuccess,
} from './user.action';

export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

export const USER_INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {

	if (singInSuccess.match(action)) {
		return { ...state, currentUser: action.payload };
	}
	if (signOutSuccess.match(action)) {
		return { ...state, currentUser: null };
	}
	if (
		signInFailed.match(action) ||
		signUpFailed.match(action) ||
		signOutFailed.match(action)
	) {
		return { ...state, error: action.payload };
	}
	return state;
};
