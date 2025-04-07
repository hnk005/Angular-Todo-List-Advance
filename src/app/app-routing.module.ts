import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomePageComponent } from './pages/user-pages/home-page/home-page.component';
import { TaskTodayPageComponent } from './pages/user-pages/task-today-page/task-today-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/auth-pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth-pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './pages/auth-pages/forgot-password-page/forgot-password-page.component';
import { VerifyAccountPageComponent } from './pages/auth-pages/verify-account-page/verify-account-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        data: { title: 'Home' },
      },
      {
        path: 'task-today',
        component: TaskTodayPageComponent,
        data: { title: 'Today' },
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordPageComponent,
      },
      {
        path: 'verify-account/:token',
        component: VerifyAccountPageComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
