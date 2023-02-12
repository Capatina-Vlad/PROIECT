import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { newUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  url="https://63220d7f362b0d4e7dc7b163.mockapi.io/user";
  postNewUser(user: newUser): Observable<any> {
    return this.http.post<newUser>(this.url,user);
}
}
