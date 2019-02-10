import {AppState} from '../app-state';

export const notificationSelector = (state: AppState) => state.notification;
export const notificationSelectorText = (state: AppState) => notificationSelector(state).text;
export const notificationSelectorType = (state: AppState) => notificationSelector(state).type;
export const notificationSelectorCaption = (state: AppState) => notificationSelector(state).caption;
export const notificationSelectorDuration = (state: AppState) => notificationSelector(state).duration;
export const notificationSelectorVisible = (state: AppState) => notificationSelector(state).visible;
