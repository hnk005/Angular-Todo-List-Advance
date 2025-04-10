import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './default-layout.component';
import { SidebarModule } from 'src/app/layouts/default-layout/sidebar/sidebar.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [SidebarModule, SharedModule],
})
export class DefaultLayoutModule {}
