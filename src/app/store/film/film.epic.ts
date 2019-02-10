import {Injectable} from '@angular/core';
import {FilmsService} from '../../services/films.service';
import {ActionsObservable} from 'redux-observable';
import {
  AllFilmsType, FetchFilmByIdActionType, fetchFilmByIdFailureAction, fetchFilmByIdSuccessAction,
  fetchFilmListActionSuccess,
  FetchFilmListActionType,
  fetchFilmListFailureAction,
  FilmActionEnum
} from './film.action';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()

export class FilmEpics {
  allEpic = [];

  constructor(private filmService: FilmsService) {
    this.allEpic = [this.getFilmsList$, this.getFilmListById$];
  }

  getFilmsList$ = (action$: ActionsObservable<AllFilmsType>) => {
    return action$.ofType(FilmActionEnum.FETCH_FILM_LIST).pipe(
      mergeMap((action: FetchFilmListActionType) => {
        return this.filmService.getFilms().pipe(
          switchMap((films) => of(
            fetchFilmListActionSuccess(films)
          )),
          catchError((error) => of(
            fetchFilmListFailureAction(error)
          ))
        );
      })
    );
  };

  getFilmListById$ = (action$: ActionsObservable<AllFilmsType>) => {
    return action$.ofType(FilmActionEnum.FETCH_FILM_BY_ID).pipe(
      mergeMap((action: FetchFilmByIdActionType) => {
        const {filmId} = action.payload;
        return this.filmService.getFilmById(filmId).pipe(
          switchMap((film) => of(
            fetchFilmByIdSuccessAction(film)
          )),
          catchError((error) => of(
            fetchFilmByIdFailureAction(error)
          ))
        );
      })
    );
  };

}
