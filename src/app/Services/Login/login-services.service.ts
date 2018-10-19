import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../../Model/login.model';
import { UserLogin } from '../../Model/userDate.model';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  private url = 'localhost:8080/hrm_system/login';
  // private headers = new Headers({ 'Content-Type': 'application/json' });
  // private options = new RequestOptions({ headers: this.headers });

  constructor(private http: HttpClient) {
   }

  public gelUserLogin(userLogin: UserLogin): Observable<Login> {
    return this.http.post<Login>(this.url, userLogin, httpOptions);
  }
}
