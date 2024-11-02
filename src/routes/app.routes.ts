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
import {QuizFetcherComponent} from "../views/quiz-fetcher/quiz-fetcher.component";

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
    path: 'manage/quizzes',
    title: 'Manage Quizzes',
    component: QuizzesComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'quizzes',
    title: 'Quizzes',
    component: QuizFetcherComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['STUDENT']
    }
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
