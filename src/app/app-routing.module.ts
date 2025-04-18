import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { MainLayoutModule } from './core/layouts/main-layout/main-layout.module';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { AuthLayoutModule } from './core/layouts/auth-layout/auth-layout.module';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./modules/todo/todo-routing.module').then(
        (m) => m.TodoRoutingModule
      ),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainLayoutModule, AuthLayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
