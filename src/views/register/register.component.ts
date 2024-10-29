import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RegisterModel} from "../../models/register.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private authService: AuthService) {
    if(authService.isLoggedIn()) {
      location.href = "home";
    }
  }

  register: RegisterModel = new class implements RegisterModel {
    dateOfBirth: string = "";
    displayname: string = "";
    email: string = "";
    firstname: string = "";
    lastname: string = "";
    password: string = "";
  }
  onRegister() {
    this.authService.register(this.register);
  }
}
