import {Routes} from '@angular/router';
import {HomeComponent} from "../views/home/home.component";
import {SettingComponent} from "../views/setting/setting.component";
import {NotfoundComponent} from "../views/notfound/notfound.component";
import {LoginComponent} from "../views/login/login.component";
import {RegisterComponent} from "../views/register/register.component";
import {QuizzesComponent} from "../views/quizzes/quizzes.component";
import {authGuard} from "../guards/auth.guard";
import {deniedGuard} from "../guards/denied.guard";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'setting',
    component: SettingComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [deniedGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'quiz',
    component: QuizzesComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
