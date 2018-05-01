import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        const player = {'email': userData.email};
        console.log(socialPlatform + ' sign in data : ' , userData);
        this.redirect(userData.name);
      }
    );
  }

  redirect(username) {
    this.route.navigate(['register', username]);
  }
}
