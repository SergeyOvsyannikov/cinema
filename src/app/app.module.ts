import {BrowserModule} from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FilmComponent} from './film/film.component';
import {RegisterComponent} from './register/register.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {EpicModule} from './store/epic/epic.module';
import {EpicsService} from './store/epic/epics.service';
import {createEpicMiddleware} from 'redux-observable';
import {AppState} from './store/app-state';
import {reducers} from './store/reducers';
import {createLogger} from 'redux-logger';
import {UserAuthService} from './services/user-auth.service';
import {NotificationModule} from './notification/notification.module';
import {FilmsService} from './services/films.service';
import {FilmListModule} from './film-list/film-list.module';
import {FilmModule} from './film/film.module';
import {FilmDetailComponent} from './film-detail/film-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    RegisterComponent,
    FilmDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    EpicModule,
    NotificationModule,
    FilmListModule,
    FilmModule
  ],
  providers: [UserAuthService, FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef,
              private ngRedux: NgRedux<AppState>,
              private ngReduxRouter: NgReduxRouter,
              private devTools: DevToolsExtension,
              private epicsService: EpicsService) {
    const epics = this.epicsService.getEpics();
    const middleWare = createEpicMiddleware();
    let enhancers = [];
    if (devTools.isEnabled()) {
      enhancers = [devTools.enhancer()];
    }
    ngRedux.configureStore(reducers, {} as AppState, [middleWare, createLogger()], enhancers);
    ngReduxRouter.initialize();
    middleWare.run(epics);
  }
}
