import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroBars3,
  heroListBullet,
  heroUserPlus,
  heroArrowRightEndOnRectangle,
} from '@ng-icons/heroicons/outline';
import { TaskListComponent } from './sidebar/task-list/task-list.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [SidebarComponent, TaskListComponent],
  imports: [
    RouterLink,
    NgIconsModule.withIcons({
      heroBars3,
      heroListBullet,
      heroUserPlus,
      heroArrowRightEndOnRectangle,
    }),
    CoreModule,
  ],
  exports: [SidebarComponent],
})
export class SharedModule {}
