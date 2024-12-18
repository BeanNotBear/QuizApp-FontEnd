import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authService: AuthService) {
  }

  @Input({required: true}) isLogined!: boolean;

  get getRole() {
    return this.authService.parseJwt(localStorage.getItem('token') ?? '').role;
  }

  onLogout() {
    this.isLogined = this.authService.logout();
  }
}
