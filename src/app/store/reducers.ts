import {combineReducers, Reducer} from 'redux';
import {AppState} from './app-state';
import {currentUserReducer} from './current-user/current-user.reducer';
import {notificationReducer} from './notification/notification.reducer';
import {filmListReducer} from './film-list/film-list.reducer';
import {filmReducer} from './film/film.reducer';

export const reducers: Reducer = combineReducers<AppState>({
  currentUser: currentUserReducer,
  notification: notificationReducer,
  filmList: filmListReducer,
  films: filmReducer
});
