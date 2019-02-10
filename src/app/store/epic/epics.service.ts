import { Injectable } from '@angular/core';
import {combineEpics} from 'redux-observable';
import {UserEpic} from '../user/user.epic';
import {FilmEpics} from '../film/film.epic';

@Injectable({
  providedIn: 'root'
})
export class EpicsService {

  getEpics() {
    return combineEpics(...this.userEpic.allEpic, ...this.filmEpic.allEpic);
  }
  constructor(private userEpic: UserEpic,
  private filmEpic: FilmEpics) { }
}
