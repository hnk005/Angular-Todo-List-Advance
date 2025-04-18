import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTodayComponent } from './pages/task-today/task-today.component';

const routes: Routes = [
  { path: '', redirectTo: 'task-today', pathMatch: 'full' },
  {
    path: 'task-today',
    component: TaskTodayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
