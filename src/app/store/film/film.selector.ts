import {AppState} from '../app-state';

export const filmsSelector = (state: AppState) => state.films;
export const filmsSelectorById = (state: AppState, filmId: string) => filmsSelector(state)[filmId];
