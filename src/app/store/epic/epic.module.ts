import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EpicsService} from './epics.service';
import {UserEpic} from '../user/user.epic';
import {FilmEpics} from '../film/film.epic';

@NgModule({
  providers: [
    EpicsService,
    UserEpic,
    FilmEpics
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EpicModule { }
