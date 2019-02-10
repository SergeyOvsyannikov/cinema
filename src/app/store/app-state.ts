import {CurrentUserState} from './current-user/current-user.reducer';
import {NotificationState} from './notification/notification.reducer';
import {FilmsListState} from './film-list/film-list.reducer';
import {FilmState} from './film/film.reducer';

export interface AppState {
  currentUser: CurrentUserState;
  notification: NotificationState;
  filmList: FilmsListState;
  films: FilmState
}
