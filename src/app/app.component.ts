import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular - Google Login';
  isLoggedIn = false;

  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user: any) => {
      this.isLoggedIn = (user != null);
    });
  }

  signOut(): void {
    this.authService.signOut().then(() => {
      this.router.navigate(['']);
    });
  }
}
