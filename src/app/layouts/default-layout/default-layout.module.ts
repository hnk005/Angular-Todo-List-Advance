import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';
import { SidebarModule } from 'src/app/features/navigation/sidebar/sidebar.module';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    RouterModule,
    SidebarModule,
  ],
})
export class DefaultLayoutModule {}
