import {Routes} from '@angular/router';
import {HomeComponent} from "../views/home/home.component";
import {SettingComponent} from "../views/setting/setting.component";
import {NotfoundComponent} from "../views/notfound/notfound.component";
import {LoginComponent} from "../views/login/login.component";
import {RegisterComponent} from "../views/register/register.component";
import {QuizzesComponent} from "../views/quizzes/quizzes.component";
import {authGuard} from "../guards/auth.guard";
import {deniedGuard} from "../guards/denied.guard";
import {roleGuard} from "../guards/role.guard";

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
    component: HomeComponent
  },
  {
    path: 'setting',
    title: 'Setting Page',
    component: SettingComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['Admin']
    }
  },
  {
    path: 'login',
    title: 'Login Page',
    component: LoginComponent,
    canActivate: [deniedGuard]
  },
  {
    path: 'register',
    title: 'Register Page',
    component: RegisterComponent,
    canActivate: [deniedGuard]
  },
  {
    path: 'quiz',
    title: 'Quiz Page',
    component: QuizzesComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
