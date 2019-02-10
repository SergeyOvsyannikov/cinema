import {UserRoles} from './user-role.enum';

export class UserModel {
  objectId: string;
  login: string;
  email: string;
  role: UserRoles;
}
