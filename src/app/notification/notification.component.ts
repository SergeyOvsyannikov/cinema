import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {NotificationModel} from '../store/notification/notification.model';
import {NgRedux, select} from '@angular-redux/store';
import {AppState} from '../store/app-state';
import {notificationSelector} from '../store/notification/notification.selector';
import {Observable, Subscription} from 'rxjs';
import {notificationHideAction} from '../store/notification/notification.action';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit, OnDestroy {

  @HostBinding('class.notification') css = true;
  @select(notificationSelector) notification: Observable<NotificationModel>;
  private sub: Subscription;

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.sub = this.ngRedux.select(notificationSelector)
      .subscribe(notification => {
        if (notification.visible) {
          setTimeout(() => {
            this.ngRedux.dispatch(notificationHideAction());
          }, notification.duration || 3000);
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
