import {ActionType, AppAction, errorAction} from '../action-defaults';

export enum UserActionEnum {
  REGISTRATION_USER = '[USER] user registration',
  REGISTRATION_SUCCESS = '[USER] user registration success',
  REGISTRATION_FAILURE = '[USER] user registration failure',
  USER_LOGIN = '[USER] user login',
  USER_LOGIN_SUCCESS = '[USER] user login succes',
  USER_LOGIN_FAILURE = '[USER] user login failure'
}

export type UserRegistrationActionType = AppAction<UserActionEnum.REGISTRATION_USER, ActionType<typeof userRegistrationAction>>;

export function userRegistrationAction(name: string, password: string, email: string) {
  return {type: UserActionEnum.REGISTRATION_USER, payload: {name, password, email}};
}

export type UserRegistrationSuccessActionType = AppAction<UserActionEnum.REGISTRATION_SUCCESS, ActionType<typeof userRegistrationSuccessAction>>;

export function userRegistrationSuccessAction(name: string, email: string, objectId: string) {
  return {type: UserActionEnum.REGISTRATION_USER, payload: {name, objectId, email}};
}

export type UserRegistrationFailureActionType = AppAction<UserActionEnum.REGISTRATION_FAILURE, ActionType<typeof userRegistrationFailureAction>>;

export function userRegistrationFailureAction(error: any) {
  return errorAction(UserActionEnum.REGISTRATION_FAILURE, error);
}

export type UserLoginActionType = AppAction<UserActionEnum.USER_LOGIN, ActionType<typeof userLoginAction>>;

export function userLoginAction(login: string, password: string) {
  return {type: UserActionEnum.USER_LOGIN, payload: {login, password}};
}

export type UserLoginSuccessActionType = AppAction<UserActionEnum.USER_LOGIN_SUCCESS, ActionType<typeof userLoginSuccessAction>>;

export function userLoginSuccessAction(login: string, email: string, objectId: string, role: string) {
  return {type: UserActionEnum.USER_LOGIN_SUCCESS, payload: {login, email, objectId, role}};
}

export type UserLoginFailureActionType = AppAction<UserActionEnum.USER_LOGIN_FAILURE, ActionType<typeof userLoginFailureAction>>;

export function userLoginFailureAction(error: any) {
  return errorAction(UserActionEnum.USER_LOGIN_FAILURE, error);
}


export type AllUserType =
  UserRegistrationActionType
  | UserRegistrationSuccessActionType
  | UserRegistrationFailureActionType
  | UserLoginActionType
  | UserLoginSuccessActionType
  | UserLoginFailureActionType;
