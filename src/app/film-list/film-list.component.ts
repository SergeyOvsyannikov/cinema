import {Component, HostBinding, Input, OnInit} from '@angular/core';

import {NgRedux, select} from '@angular-redux/store';
import {AppState} from '../store/app-state';
import {fetchFilmListAction} from '../store/film/film.action';
import {filmListSelectorObjectIds} from '../store/film-list/film-list.selector';
import {Observable} from 'rxjs';
import {filmsSelectorById} from '../store/film/film.selector';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.less']
})

export class FilmListComponent implements OnInit {
  @select(filmListSelectorObjectIds) filmList: Observable<string[]>;
  @HostBinding('class.app-film-list') css = true;

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  getFilmById(filmId: string) {
    return this.ngRedux.select((state) => filmsSelectorById(state, filmId));
  }

  ngOnInit() {
    this.ngRedux.dispatch(fetchFilmListAction());
  }

}
