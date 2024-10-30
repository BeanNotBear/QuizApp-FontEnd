import {Injectable} from '@angular/core';
import Swal from 'sweetalert2'
import {ApiService} from "../api/authapi.service";
import {LoginModel} from "../models/login.model";
import {RegisterModel} from "../models/register.model";
import {LoaderService} from "./loader.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService, private loaderService: LoaderService) {
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem("token")) {
      let tokenData = this.parseJwt(localStorage.getItem("token") ?? "");
      const currentTime = Math.floor(Date.now() / 1000);
      if (tokenData.exp > currentTime) {
        return true;
      } else {
        this.logout();
        return false;
      }
    }
    ;
    return false;
  }

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  logout() {
    let isLogin = true;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out now!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        isLogin = false;
        Swal.fire({
          title: "Log out!",
          text: "You have successfully logged out.",
          icon: "success"
        }).then(result => {
          location.reload();
        });
      }
    });
    return isLogin;
  }

  login(login: LoginModel) {
    this.loaderService.requestStarted();
    let payload = login;
    this.apiService.login(payload).subscribe(
      response => {
        this.loaderService.requestEnded();
        localStorage.setItem("token", response.token);
        Swal.fire({
          title: "Login successfully!",
          text: "Please click on the button!",
          icon: "success"
        }).then((result) => {
          location.href = "home";
        });
      },
      error => {
        this.loaderService.requestEnded();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
      }
    );
  }

  register(register: RegisterModel) {
    let payload = register;
    this.loaderService.requestStarted();
    this.apiService.register(payload).subscribe(
      response => {
        this.loaderService.requestEnded();
        if (response) {
          Swal.fire({
            title: "Register successfully!",
            text: "Please click on the button!",
            icon: "success"
          }).then((result) => {
            location.href = "login";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
          });
        }
      },
      error => {
        this.loaderService.requestEnded();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
      }
    )
  }
}
