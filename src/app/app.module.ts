import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { PagesModule } from './pages/pages.module';
import { AccountSettingsService } from './shared/services/account-settings.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, PagesModule, FormsModule, AppRoutingModule],
  providers: [AccountSettingsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
