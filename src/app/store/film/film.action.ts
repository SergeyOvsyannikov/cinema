import {ActionType, AppAction, errorAction} from '../action-defaults';
import {FilmModel} from '../../models/film.model';


export enum FilmActionEnum {
  CLEAR_FILM_LIST = 'clear film list',
  FETCH_FILM_LIST = 'fetch film list',
  FETCH_FILM_LIST_SUCCESS = 'fetch film list success',
  FETCH_FILM_LIST_FAILURE = 'fetch film list failure',
  FETCH_FILM_BY_ID = 'fetch film by id ',
  FETCH_FILM_BY_ID_SUCCESS = 'fetch film by id success',
  FETCH_FILM_BY_ID_FAILURE = 'fetch film by id failure'
}
export type ClearFilmListActionType = AppAction<FilmActionEnum.CLEAR_FILM_LIST, ActionType<typeof clearFilmListAction>>;
export function clearFilmListAction() {
  return {type: FilmActionEnum.CLEAR_FILM_LIST};
}

export type FetchFilmListActionType = AppAction<FilmActionEnum.FETCH_FILM_LIST, ActionType<typeof fetchFilmListAction>>;

export function fetchFilmListAction() {
  return {type: FilmActionEnum.FETCH_FILM_LIST};
}

export type FetchFilmListSuccessActionType = AppAction<FilmActionEnum.FETCH_FILM_LIST_SUCCESS, ActionType<typeof fetchFilmListActionSuccess>>;

export function fetchFilmListActionSuccess(films: FilmModel[]) {
  return {type: FilmActionEnum.FETCH_FILM_LIST_SUCCESS, payload: {films}};
}

export type FetchFilmListActionFailureType = AppAction<FilmActionEnum.FETCH_FILM_LIST_FAILURE, ActionType<typeof fetchFilmListFailureAction>>;

export function fetchFilmListFailureAction(error: any) {
  return errorAction(FilmActionEnum.FETCH_FILM_LIST_FAILURE, {error});
}

export type FetchFilmByIdActionType = AppAction<FilmActionEnum.FETCH_FILM_BY_ID, ActionType<typeof fetchFilmByIdAction>>;

export function fetchFilmByIdAction(filmId: string) {
  return {type: FilmActionEnum.FETCH_FILM_BY_ID, payload: {filmId} };
}

export type FetchFilmByIdSuccesActionType = AppAction<FilmActionEnum.FETCH_FILM_BY_ID_SUCCESS, ActionType<typeof fetchFilmByIdSuccessAction>>;

export function fetchFilmByIdSuccessAction(film: FilmModel) {
  return {type: FilmActionEnum.FETCH_FILM_BY_ID_SUCCESS, payload: {film}};
}

export type FetchFilmByIdFailureActionType = AppAction<FilmActionEnum.FETCH_FILM_BY_ID_FAILURE, ActionType<typeof fetchFilmByIdFailureAction>>;

export function fetchFilmByIdFailureAction(error: any) {
  return errorAction(FilmActionEnum.FETCH_FILM_BY_ID_FAILURE, {error});
}

export type AllFilmsType =
  FetchFilmListActionType
  | FetchFilmListSuccessActionType
  | FetchFilmListActionFailureType
  | FetchFilmByIdActionType
  | FetchFilmByIdSuccesActionType
  | FetchFilmByIdFailureActionType
  | ClearFilmListActionType;

