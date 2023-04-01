import { switchMap, map } from 'rxjs/operators';
import { LocalStorageHelperService } from '../../../shares/services/token-storage/localstorage-helper.service';
import { Token } from './../../../shares/models/token/token';
import { User } from './../../../shares/models/user/user';
import { AuthService } from './../../../shares/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shares/services/user/user.service';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  infoLogin = this.initFormLogin();
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageHelperService: LocalStorageHelperService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  initFormLogin(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    const userData: any = {
      username: this.infoLogin.value.username,
      password: this.infoLogin.value.password
    }
    const token = new Token();
    this.authService.login(userData, false).pipe(
      tap((res: Token) => {
        this.localStorageHelperService.saveToken(res.accessToken.toString());
        this.localStorageHelperService.saveRefreshToken(res.refreshToken.toString());
        this.localStorageHelperService.saveIsVerify(res.isConfirmEmail);
        token.accessToken = res.accessToken;
        token.refreshToken = res.refreshToken;
        token.isConfirmEmail = res.isConfirmEmail;
        token.isConfirmEmail = res.isConfirmEmail;
        token.isAdmin = res.isAdmin;
      }),
      switchMap(() => this.userService.getMe()),
      switchMap((user: User) => {
        user.password = userData.password;
        this.localStorageHelperService.addUser(user);
        this.authService.isLogin(true);
        if (token && token.isConfirmEmail) {
          this.router.navigate(['/home/newest/posts']);
          return of(null);
        }
        this.router.navigate(['/auth/validate-email']);
        return this.authService.sendOTP(user.username!);
      })
    ).subscribe((user: User) => {

    });
  }
}
