import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { MainLayoutModule } from './core/layouts/main-layout/main-layout.module';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { AuthLayoutModule } from './core/layouts/auth-layout/auth-layout.module';

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
    loadChildren: () =>
      import('./modules/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
