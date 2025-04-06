import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroBars3,
  heroListBullet,
  heroUserPlus,
  heroArrowRightEndOnRectangle,
} from '@ng-icons/heroicons/outline';
import { SidebarComponent } from './sidebar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HighlightOnRouteDirective } from './directives/highlight-on-route/highlight-on-route.directive';

@NgModule({
  declarations: [
    SidebarComponent,
    NavigationComponent,
    HighlightOnRouteDirective,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroBars3,
      heroListBullet,
      heroUserPlus,
      heroArrowRightEndOnRectangle,
    }),
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
