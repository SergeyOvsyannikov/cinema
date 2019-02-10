import {Reducer} from 'redux';
import {AllUserType, UserActionEnum} from '../user/user.action';
import {UserRoles} from '../../models/users/user-role.enum';
import {GenerationType} from '../action-defaults';

const INITIAL_STATE = {objectId: null, role: UserRoles.GUEST, login: '', email: ''};
export interface CurrentUserState extends GenerationType<typeof INITIAL_STATE> {
  objectId: string;
}

export const currentUserReducer: Reducer = (state = INITIAL_STATE, action: AllUserType) => {
  switch (action.type) {
    case UserActionEnum.USER_LOGIN_SUCCESS:
    {
      const {objectId, email, login, role} = action.payload;
      return {...state, objectId, email, login, role};
    }
  }
  return state;
};
