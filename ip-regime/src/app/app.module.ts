import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { DefaultUserComponent } from './default-user/default-user.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular5-social-login';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('496798025485-1e40b53p0foces0kbjjqknmrop5cd7u2.apps.googleusercontent.com')
      }
    ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SocialLoginComponent,
    UserInfoComponent,
    UserStatusComponent,
    DefaultUserComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [{provide: AuthServiceConfig, useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})
export class AppModule { }
