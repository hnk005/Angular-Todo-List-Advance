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
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavigationComponent,
    HighlightOnRouteDirective,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
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
