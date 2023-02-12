import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './login';
import { newUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  url="https://63220d7f362b0d4e7dc7b163.mockapi.io/login"

  postUser(user: Users): Observable<any> {
    return this.http.post<Users>(this.url,user);

}

url2="https://63220d7f362b0d4e7dc7b163.mockapi.io/user";
  postNewUser(newUser: newUser): Observable<any> {
    return this.http.post<newUser>(this.url2,newUser);
}
}
