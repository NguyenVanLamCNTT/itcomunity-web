import { TokenStorageService } from './../../../shares/services/token-storage/token-storage.service';
import { Token } from './../../../shares/models/token/token';
import { User } from './../../../shares/models/user/user';
import { AuthService } from './../../../shares/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private tokenStorageService: TokenStorageService
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
    console.log('userData', userData);
    this.authService.login(userData, false).subscribe((res: Token) => {
      console.log(res);
      this.tokenStorageService.saveToken(res.accessToken.toString());
      this.tokenStorageService.saveRefreshToken(res.refreshToken.toString());
      this.tokenStorageService.saveIsVerify(res.isConfirmEmail);
      if (res && !res.isConfirmEmail) {
        this.router.navigate(['/auth/validate-email']);
        return;
      } else {
        this.router.navigate(['/home/newest']);
      }
    });
  }
}
