import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/Model/User.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = 'http://localhost:8080/hrm_system/user';
  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get<User[]>(this.urlUser);
  }
}
