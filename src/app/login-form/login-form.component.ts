import {Component, HostBinding, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {UserAuthService} from '../services/user-auth.service';
import {catchError, map, tap,} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {NgRedux, select} from '@angular-redux/store';
import {userLoginAction} from '../store/user/user.action';
import {log} from 'util';
import {AppState} from '../store/app-state';
import {currentUserSelector, currentUserSelectorObjectId} from '../store/current-user/current-user.selector';
import {UserModel} from '../models/users/user.model';
import {notificationSelectorVisible} from '../store/notification/notification.selector';
import {LoginFormVisible} from './login-form.visible';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  @HostBinding('class') class = 'login-form';
  reactiveForm: FormGroup;
  @select(currentUserSelectorObjectId) userId: Observable<string>;
  @select(currentUserSelector) currentUser: Observable<UserModel>;
  @select(notificationSelectorVisible) notifVisible: Observable<boolean>;

  constructor(private fb: FormBuilder,
              private ngRedux: NgRedux<AppState>,
              private uAuth: UserAuthService) {
  }

  onSubmit() {
    const controls = this.reactiveForm.controls;

    /** Проверяем форму на валидность */
    if (this.reactiveForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /** Прерываем выполнение метода*/
      return;
    }

    /** TODO: Обработка данных формы */
    const {login, password} = this.reactiveForm.value;
    this.ngRedux.dispatch(userLoginAction(login, password));
  }

  initForm() {
    this.reactiveForm = this.fb.group({
      login: [''],
      password: [null]
    });
  }

  toggleFormVisible() {
    LoginFormVisible.toggleVisible();
  }

  ngOnInit() {
    this.initForm();
    this.currentUser.subscribe(val => {
      if (val.objectId) {
        this.toggleFormVisible();
      }
    });
  }

}
