import {Component, Injectable, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginModel} from "../../models/login.model";
import {AuthService} from "../../services/auth.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent {
  constructor(private authService: AuthService) {
  }

  login: LoginModel = new class implements LoginModel {
    password: string = "";
    email: string = "";
  };

  onLogin() {
    this.authService.login(this.login);
  }

  allRoutes: any[] = [];
}
