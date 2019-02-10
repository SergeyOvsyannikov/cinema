import {Component, HostBinding, Input, OnInit,} from '@angular/core';
import {FilmModel} from '../models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.less']
})
export class FilmComponent implements OnInit {

  @Input() film: FilmModel;
  @HostBinding('class.app-film') css = true;
  constructor() { }

  ngOnInit() {
  }

}
