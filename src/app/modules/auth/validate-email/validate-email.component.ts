import { Router } from '@angular/router';
import { LocalStorageHelperService } from './../../../shares/services/token-storage/localstorage-helper.service';
import { AuthService } from './../../../shares/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { switchMap } from 'rxjs';
import { UserService } from 'src/app/shares/services/user/user.service';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss']
})
export class ValidateEmailComponent implements OnInit {
  formOTP = this.initFormOTP();
  constructor(private translateService: TranslateService,
              private authService: AuthService,
              private localStorageHelperService: LocalStorageHelperService,
              private userService: UserService,
              private router: Router
              ) { }

  ngOnInit(): void {
    const currentLanguage = this.translateService.currentLang;
    console.log(currentLanguage);
    this.translateService.use(currentLanguage || 'vi');
  }

  initFormOTP(): FormGroup {
    return new FormGroup({
      number1: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number2: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number3: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number4: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number5: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number6: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
    });
  }

  nextValue(value: string): void{
    console.log(value);
    switch (value) {
      case 'number1':
        if (this.formOTP.getRawValue().number1 !== ''){
          document.getElementById('number2')?.focus();
        }
        break;
      case 'number2':
        if (this.formOTP.getRawValue().number2 !== ''){
          document.getElementById('number3')?.focus();
        } else {
          document.getElementById('number1')?.focus();
        }
        break;
      case 'number3':
        if (this.formOTP.getRawValue().number3 !== ''){
          document.getElementById('number4')?.focus();
        } else {
          document.getElementById('number2')?.focus();
        }
        break;
      case 'number4':
        if (this.formOTP.getRawValue().number4 !== ''){
          document.getElementById('number5')?.focus();
        } else {
          document.getElementById('number3')?.focus();
        }
        break;
      case 'number5':
        if (this.formOTP.getRawValue().number5 !== ''){
          document.getElementById('number6')?.focus();
        } else {
          document.getElementById('number4')?.focus();
        }
      break;
      case 'number6':
        if (this.formOTP.getRawValue().number6 !== ''){
          this.submit();
        } else {
          document.getElementById('number5')?.focus();
        }
    }
  }

  submit(): void {
    const otp = this.formOTP.getRawValue().number1 + this.formOTP.getRawValue().number2 + this.formOTP.getRawValue().number3 + this.formOTP.getRawValue().number4 + this.formOTP.getRawValue().number5 + this.formOTP.getRawValue().number6;
    const user = this.localStorageHelperService.getUser();
    this.authService.verifyOTP(user.email!, parseInt(otp)).pipe(
      switchMap((res) => {
        console.log('OTP res', res);
        return this.authService.login(user, true);
      }),
      switchMap((res) => {
        console.log('Login res', res);
        this.localStorageHelperService.saveToken(res.accessToken.toString());
        this.localStorageHelperService.saveRefreshToken(res.refreshToken.toString());
        this.localStorageHelperService.saveIsVerify(res.isConfirmEmail);
        return this.userService.getMe();
      })
    ).subscribe((data: any) => {
      console.log('Get me res', data);
      this.localStorageHelperService.addUser(data);
      this.router.navigate(['/home/newest/posts']);
    });
  }
}
