import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BackendServices} from './backend-services';
import {UserModel} from '../models/users/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService extends BackendServices {

  private URL_USERS = this.URL_API + 'users/';
  private URL_USERS_LOGIN = this.URL_USERS + 'login';
  private URL_USERS_REGISTER = this.URL_USERS + 'register';

  newUser(login: string, password: string, email: string) {
    const body = {login, email, password};
    const header = new HttpHeaders();
    return this.http.post(
      this.URL_USERS_REGISTER, body,
      {headers: header});
  }

  logIn(login, password) {
    const body = {login, password};
    const header = new HttpHeaders();
    console.log(body);
    return this.http.post<UserModel>(
      this.URL_USERS_LOGIN, body,
      {headers: header});
  }

  constructor(private http: HttpClient) {
    super();
  }
}
