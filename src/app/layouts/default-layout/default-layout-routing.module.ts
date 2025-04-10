import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/pages/dashboard-page/home-page/home-page.component';
import { TaskTodayPageComponent } from 'src/app/pages/dashboard-page/task-today-page/task-today-page.component';
import { DashboardPagesModule } from 'src/app/pages/dashboard-page/dashboard-page.module';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes), DashboardPagesModule],
  exports: [RouterModule],
})
export class DefaultLayoutRoutingModule {}
