import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { TaskTodayComponent } from './modules/todo/pages/task-today/task-today.component';
import { MainLayoutModule } from './core/layouts/main-layout/main-layout.module';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'task-today', pathMatch: 'full' },
      {
        path: 'task-today',
        component: TaskTodayComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainLayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
