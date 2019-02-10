import {AnyAction} from 'redux';

export interface AppAction<T, P = any> extends AnyAction {
  type: T;
  payload?: P;
}
export type GenerationType<T> = T;
type ExtractField<T, U extends keyof T> = U extends keyof T ? T[U] : never;
type PayloadExtract<T extends {payload: any}> = ExtractField<T, 'payload'>;
export type ActionType<T extends (...args: any[]) => any> = PayloadExtract<ReturnType<T>>;

export interface StateModel<T> {
  [objectId: string]: T;
}

export function errorAction<T>(type: T, error: any) {
  return {type, payload: {error}};
}
