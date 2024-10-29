import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "../views/login/login.component";
import {HeaderComponent} from "../layout/header/header.component";
import {FooterComponent} from "../layout/footer/footer.component";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLogined: boolean = false;
  constructor(private authService: AuthService) {
    this.isLogined = authService.isLoggedIn();
  }
}
