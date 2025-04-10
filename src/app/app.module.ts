import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';
import { CoreModule } from './core/core.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { AuthPagesModule } from './pages/auth-pages/auth-pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultLayoutModule,
    AuthLayoutModule,
    AuthPagesModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
