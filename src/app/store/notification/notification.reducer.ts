import {NotificationModel, NotificationTypeEnum} from './notification.model';
import {GenerationType} from '../action-defaults';
import {Reducer} from 'redux';
import {AllNotificationType, NotificationEnum} from './notification.action';

const INITIAL_STATE: NotificationModel = {text: '', caption: '', duration: 0, type: NotificationTypeEnum.SUCCESS, visible: false};

export interface NotificationState extends GenerationType<typeof INITIAL_STATE> {
}

export const notificationReducer: Reducer = (state = INITIAL_STATE, action: AllNotificationType) => {
  switch (action.type) {
    case NotificationEnum.HIDE: {
      const {visible} = action.payload;
      return {...state, visible};
    }
    case NotificationEnum.SHOW: {
      const {visible, caption, duration, text, type} = action.payload;
      return {...state, visible, caption, duration, text, type};
    }
  }
  return state;
};
