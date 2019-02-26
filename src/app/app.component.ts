import {Component, HostBinding} from '@angular/core';
import {select} from '@angular-redux/store';
import {notificationSelectorVisible} from './store/notification/notification.selector';
import {Observable} from 'rxjs';
import {LoginFormVisible} from './login-form/login-form.visible';
import {currentUserSelector, currentUserSelectorLogin} from './store/current-user/current-user.selector';
import {UserModel} from './models/users/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  @HostBinding('class.application') css = true;
  @select(notificationSelectorVisible) notifVisible: Observable<boolean>;
  @select(currentUserSelector) currentUser: Observable<UserModel>;
  @select(currentUserSelectorLogin) currentUserLogin: Observable<string>;


  constructor() {
  }

  toggleVisible() {
    LoginFormVisible.toggleVisible();
  }

  isVisible() {
    return LoginFormVisible.loginVisible;
  }
}
