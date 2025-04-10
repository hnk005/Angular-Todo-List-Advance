import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroUser } from '@ng-icons/heroicons/outline';
import { UserService } from './user.service';

@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroUser,
    }),
  ],
  providers: [UserService],
  exports: [InfoComponent],
})
export class UserModule {}
