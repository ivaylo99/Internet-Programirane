import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { PremiumUserComponent } from './premium-user/premium-user.component';
import { DefaultUserComponent } from './default-user/default-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialLoginComponent,
    UserInfoComponent,
    UserStatusComponent,
    PremiumUserComponent,
    DefaultUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
