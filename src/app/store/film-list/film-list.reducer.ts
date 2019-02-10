import {GenerationType} from '../action-defaults';
import {Reducer} from 'redux';
import {AllFilmsType, FilmActionEnum} from '../film/film.action';


const INITIAL_STATE = {objectIds: []};

export interface FilmsListState extends GenerationType<typeof INITIAL_STATE> {
  objectIds: string[];
}

export const filmListReducer: Reducer = (state = INITIAL_STATE, action: AllFilmsType) => {
  switch (action.type) {
    case FilmActionEnum.FETCH_FILM_LIST_SUCCESS: {
      const {films} = action.payload;
      return {...state, objectIds: [...state.objectIds, ...films.map((f) => f.objectId)]};
    }
  }
  return state;
};
