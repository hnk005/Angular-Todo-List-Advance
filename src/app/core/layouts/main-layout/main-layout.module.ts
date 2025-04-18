import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroArrowLeftEndOnRectangle,
  heroBars3,
  heroCalendarDays,
  heroChevronDoubleRight,
  heroDocument,
  heroListBullet,
  heroMagnifyingGlass,
} from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
  ],
  imports: [
    RouterOutlet,
    RouterLink,
    NgIconsModule.withIcons({
      heroBars3,
      heroMagnifyingGlass,
      heroChevronDoubleRight,
      heroListBullet,
      heroCalendarDays,
      heroDocument,
      heroArrowLeftEndOnRectangle,
    }),
  ],
})
export class MainLayoutModule {}
