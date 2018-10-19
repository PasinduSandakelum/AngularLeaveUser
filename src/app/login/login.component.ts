import { Component, OnInit } from '@angular/core';
import { Login } from '../Model/login.model';
import { UserLogin } from '../Model/userDate.model';
import { LoginServicesService } from '../Services/Login/login-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newLogin: UserLogin = new UserLogin();
  logedUser: Login;

  constructor(private loginService: LoginServicesService) { 
    this.newLogin.userName = 'dimuthu';
    this.newLogin.password = '1234';
  }

  ngOnInit() {
    console.log(this.loginService.gelUserLogin(this.newLogin));
  }

}
