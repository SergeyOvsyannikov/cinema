import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListComponent } from './film-list.component';
import {FilmModule} from '../film/film.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FilmListComponent],
  imports: [
    CommonModule,
    FilmModule,
    RouterModule
  ],
  exports: [FilmListComponent]
})
export class FilmListModule { }
