import {Component, Input, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {filmListSelectorObjectIds} from '../store/film-list/film-list.selector';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {filmsSelectorById} from '../store/film/film.selector';
import {AppState} from '../store/app-state';
import {fetchFilmByIdAction} from '../store/film/film.action';
import {FilmModel} from '../models/film.model';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.less']
})
export class FilmDetailComponent implements OnInit {

  private objectId: string;
  constructor(private router: ActivatedRoute,
              private ngRedux: NgRedux<AppState>) {
  }
  getFilmById() {
    return this.ngRedux.select((state) => filmsSelectorById(state, this.objectId));
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.objectId = params['id'];
      this.ngRedux.dispatch(fetchFilmByIdAction(this.objectId));
    });
  }

}
