import {ActionType, AppAction} from '../action-defaults';
import {NotificationModel, NotificationTypeEnum} from './notification.model';

export enum NotificationEnum {
  SHOW = '[NOTIFICATION] show notification',
  HIDE = '[NOTIFICATION] hide notification'
}

export type notificationShowActionType = AppAction<NotificationEnum.SHOW, ActionType<typeof notificationShowAction>>;

export function notificationShowAction(text: string,
                                       caption: string,
                                       duration: number,
                                       visible: boolean,
                                       type: NotificationTypeEnum) {
  return {
    type: NotificationEnum.SHOW, payload: {
      text, caption, duration, visible, type
    }
  };
}

export type notificationHideActionType = AppAction<NotificationEnum.HIDE, ActionType<typeof notificationHideAction>>;

export function notificationHideAction() {
  return {type: NotificationEnum.HIDE, payload: {visible: false}};
}

export function notificationShowError(notification: Partial<NotificationModel> & { type?: never }) {
  return notificationShowAction(notification.text || '', notification.caption || 'ERROR', notification.duration || 5000,
    true, NotificationTypeEnum.ERROR);
}

export function notificationShowWarning(notification: Partial<NotificationModel> & { type?: never }) {
  return notificationShowAction(notification.text || '', notification.caption || 'WARNING', notification.duration || 5000,
    true, NotificationTypeEnum.WARNING);
}

export function notificationShowSuccess(notification: Partial<NotificationModel> & { type?: never }) {
  return notificationShowAction(notification.text || '', notification.caption || 'SUCCESS', notification.duration || 5000,
    true, NotificationTypeEnum.SUCCESS);
}

export type AllNotificationType =
  notificationShowActionType
  | notificationHideActionType;
