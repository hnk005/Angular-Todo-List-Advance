import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskTodayPageComponent } from './task-today-page/task-today-page.component';
import { UserModule } from 'src/app/features/user/user.module';

@NgModule({
  declarations: [HomePageComponent, TaskTodayPageComponent],
  imports: [SharedModule, UserModule],
  exports: [HomePageComponent, TaskTodayPageComponent],
})
export class DashboardPagesModule {}
