import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { RouterOutlet } from '@angular/router';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
  ],
  imports: [RouterOutlet],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
