import { NgModule } from '@angular/core';
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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SidebarComponent,
    NavigationComponent,
    HighlightOnRouteDirective,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
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
