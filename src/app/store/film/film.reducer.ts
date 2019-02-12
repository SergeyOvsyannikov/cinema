import {GenerationType, StateModel} from '../action-defaults';
import {FilmModel} from '../../models/film.model';
import {Reducer} from 'redux';
import {AllFilmsType, FilmActionEnum} from './film.action';

const INITIAL_STATE: StateModel<FilmModel> = {};

export interface FilmState extends GenerationType<typeof INITIAL_STATE> {
}

export const filmReducer: Reducer = (state = INITIAL_STATE, action: AllFilmsType) => {
  switch (action.type) {
    case FilmActionEnum.FETCH_FILM_LIST_SUCCESS: {
      const {films} = action.payload;
      const newState = {...state};
      for (const film of films) {
        newState[film.objectId] = {...state[film.objectId], ...film};
      }
      return newState;
    }
    case FilmActionEnum.FETCH_FILM_BY_ID_SUCCESS: {
      const {film} = action.payload;
      return {...state, [film.objectId]: {...film}};
    }
  }
  return state;

};

