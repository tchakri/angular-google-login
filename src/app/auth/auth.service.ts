import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable()
export class AuthService {

  isLoggedIn = false;

  constructor(public socialAuthService: SocialAuthService, private router: Router) { }

  public isAuthenticated(): boolean {
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
    return this.isLoggedIn;
  }

  public signIn(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
      if (user) {
        this.router.navigate(['home']);
      }
    });
  }
}
