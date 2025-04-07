import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultLayoutModule,
    AuthLayoutModule,
    CoreModule,
    SharedModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
