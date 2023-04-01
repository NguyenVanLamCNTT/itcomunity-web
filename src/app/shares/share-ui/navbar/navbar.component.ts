import { LocalStorageHelperService } from './../../services/token-storage/localstorage-helper.service';
import { AuthService } from './../../services/auth/auth.service';
import { ChangeDetectionStrategy, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnChanges {
  isLogin: boolean = false;
  user: User | undefined;
  constructor(private authService: AuthService,
    private router: Router,
    private localStorageHelperService: LocalStorageHelperService) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.isLogin = this.authService.checkLogin();
    this.getMe();
  }

  getMe(): void {
    this.user = this.localStorageHelperService.getUser();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home/newest/posts']);
  }
}
