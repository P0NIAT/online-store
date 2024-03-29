import {
	UserData,
	AdditionalInformation,
} from '../../utils/firebase/firebase.utils';
import { USER_ACTION_TYPES } from './user.types';

import {
	createAction,
	Action,
	ActionWithPayload,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { User } from 'firebase/auth';

export type SetCurrentUser = ActionWithPayload<
	USER_ACTION_TYPES.SET_CURRENT_USER,
	UserData
>;

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSingInStart = ActionWithPayload<
	USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
	{ email: string; password: string }
>;

export type SingInSuccess = ActionWithPayload<
	USER_ACTION_TYPES.SING_IN_SUCCESS,
	UserData
>;

export type SignInFailed = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_IN_FAILED,
	Error
>;

export type SingUpStart = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_UP_START,
	{ email: string; password: string; displayName: string }
>;

export type SingUpSuccess = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_UP_SUCCESS,
	{ user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_UP_FAILED,
	Error
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_OUT_FAILED,
	Error
>;

export const checkUserSession = withMatcher(
	(): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const setCurrentUser = withMatcher(
	(user: UserData): SetCurrentUser =>
		createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export const googleSignInStart = withMatcher(
	(): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSingInStart = withMatcher(
	(email: string, password: string): EmailSingInStart =>
		createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const singInSuccess = withMatcher(
	(user: UserData & { id: string }): SingInSuccess =>
		createAction(USER_ACTION_TYPES.SING_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
	(error: Error): SignInFailed =>
		createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const singUpStart = withMatcher(
	(email: string, password: string, displayName: string): SingUpStart =>
		createAction(USER_ACTION_TYPES.SIGN_UP_START, {
			email,
			password,
			displayName,
		})
);

export const singUpSuccess = withMatcher(
	(user: User, additionalDetails: AdditionalInformation): SingUpSuccess =>
		createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
	(error: Error): SignUpFailed =>
		createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
	(): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
	(): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
	(error: Error): SignOutFailed =>
		createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
