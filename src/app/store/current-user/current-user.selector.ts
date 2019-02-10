import {AppState} from '../app-state';

export const currentUserSelector = (state: AppState) => state.currentUser;
export const currentUserSelectorObjectId = (state: AppState) => currentUserSelector(state).objectId;
export const currentUserSelectorLogin = (state: AppState) => currentUserSelector(state).login;
export const currentUserSelectorRole = (state: AppState) => currentUserSelector(state).role;
export const currentUserSelectorEmail = (state: AppState) => currentUserSelector(state).email;
