import {Injectable} from '@angular/core';
import {BackendServices} from './backend-services';
import {HttpClient} from '@angular/common/http';
import {FilmModel} from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends BackendServices {
  private URL_FILMS = this.URL_DATA + 'films';
  getFilms() {
    return this.http.get<Array<FilmModel>>(this.URL_FILMS);
  }

  getFilmById(id: string) {
    return this.http.get<FilmModel>(this.URL_FILMS + '/' + id);
  }

  constructor(private http: HttpClient) {
    super();
  }
}
