import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginComponent } from './social-login/social-login.component'
import { DefaultUserComponent } from './default-user/default-user.component'
import { PremiumUserComponent } from './premium-user/premium-user.component'
import { UserInfoComponent } from './user-info/user-info.component'
import { UserStatusComponent } from './user-status/user-status.component'

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: SocialLoginComponent},
  {path: 'regular/:username', component: DefaultUserComponent},
  {path: 'premium/:username', component: PremiumUserComponent},
  {path: 'register/:username', component: UserInfoComponent},
  {path: 'status/:username', component: UserStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
