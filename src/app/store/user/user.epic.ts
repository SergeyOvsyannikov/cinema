import {Injectable} from '@angular/core';
import {AsyncAction} from 'rxjs/internal/scheduler/AsyncAction';
import {ActionsObservable} from 'redux-observable';
import {UserActionEnum, userLoginFailureAction, userLoginSuccessAction, UserLoginActionType, AllUserType} from './user.action';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {UserAuthService} from '../../services/user-auth.service';
import {of} from 'rxjs';
import {notificationShowError, notificationShowSuccess} from '../notification/notification.action';

@Injectable()
export class UserEpic {
  allEpic = [];

  constructor(private userAuth: UserAuthService) {
    this.allEpic.push(this.userLogin$);
  }

  userLogin$ = (action$: ActionsObservable<AllUserType>) => {
    return action$.ofType(UserActionEnum.USER_LOGIN).pipe(
      mergeMap((action: UserLoginActionType) => {
        const {login, password} = action.payload;
        return this.userAuth.logIn(login, password).pipe(
          switchMap((user) => of(
            userLoginSuccessAction(user.login, user.email, user.objectId, user.role),
            notificationShowSuccess(
              {
                caption: 'Авторизация',
                text: 'Успешная авторизация'
              })
          )),
          catchError((error) => of(
            userLoginFailureAction(error),
            notificationShowError({
              caption: 'Ошибка',
              text: 'Во время авторизации произошла ошибка'
            })))
        );
      })
    );
  };
}
