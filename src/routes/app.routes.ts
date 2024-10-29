import {Routes} from '@angular/router';
import {HomeComponent} from "../views/home/home.component";
import {SettingComponent} from "../views/setting/setting.component";
import {NotfoundComponent} from "../views/notfound/notfound.component";
import {LoginComponent} from "../views/login/login.component";
import {RegisterComponent} from "../views/register/register.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
