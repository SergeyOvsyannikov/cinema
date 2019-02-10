import {Component, HostBinding} from '@angular/core';
import {select} from '@angular-redux/store';
import {notificationSelectorVisible} from './store/notification/notification.selector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'cinema';
  @HostBinding('class.application')  css = true;
  @select(notificationSelectorVisible) notifVisible: Observable<boolean>;
}
