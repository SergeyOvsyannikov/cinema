import {Component, HostBinding, Input, OnInit,} from '@angular/core';
import {FilmModel} from '../models/film.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {RouterLink} from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.less']
})
export class FilmComponent implements OnInit {

  @Input() film: FilmModel;
  @HostBinding('class.app-film') css = true;
  constructor(router: ActivatedRoute,
              location: Location,
              routerLink: RouterLink,
              routerModule: RouterModule) { }

  ngOnInit() {
  }

}
