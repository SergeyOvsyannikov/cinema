import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListComponent } from './film-list.component';
import {FilmModule} from '../film/film.module';

@NgModule({
  declarations: [FilmListComponent],
  imports: [
    CommonModule,
    FilmModule
  ],
  exports: [FilmListComponent]
})
export class FilmListModule { }
