import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import Swal from "sweetalert2";

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token  = localStorage.getItem('token') ?? '';
  const jwtDecode = authService.parseJwt(token);
  const role = jwtDecode?.role;
  const expectedRoles = route.data['roles'];
  if(!expectedRoles.includes(role)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You does not have permission",
    });
    return false;
  }
  return true;
};
