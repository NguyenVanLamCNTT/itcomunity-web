import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLogin = this.authService.checkLogin();
    console.log(this.isLogin);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home/newest']);
  }
}
