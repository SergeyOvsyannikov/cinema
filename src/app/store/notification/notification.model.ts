export class NotificationModel {
  text: string;
  caption: string;
  duration: number;
  visible: boolean;
  type: NotificationTypeEnum;
}

export enum NotificationTypeEnum {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning'
}
