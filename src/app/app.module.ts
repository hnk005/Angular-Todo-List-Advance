import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterComponent } from './components/register/register.component';
import { FormLoginComponent } from './components/login/components/form-login/form-login.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, FormLoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultLayoutModule,
    AuthLayoutModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
