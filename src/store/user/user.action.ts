import { USER_ACTION_TYPES, User } from './user.types';

import {
	createAction,
	Action,
	ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, User>

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>

export const setCurrentUser = (user: User): SetCurrentUser =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = (): CheckUserSession =>
	createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
	createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSingStart = (email, password) =>
	createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const singInSuccess = (user) =>
	createAction(USER_ACTION_TYPES.SING_IN_SUCCESS, user);

export const signInFailed = (error: Error) =>
	createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const singUpStart = (email, password, displayName) =>
	createAction(USER_ACTION_TYPES.SIGN_UP_START, {
		email,
		password,
		displayName,
	});

export const singUpSuccess = (user, additionalDetails) =>
	createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error: Error) =>
	createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
	createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
	createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error: Error) =>
	createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
