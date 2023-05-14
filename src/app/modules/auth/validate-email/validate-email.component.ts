import { NotifyService } from './../../../shares/services/notify/notify.service';
import { Router } from '@angular/router';
import { LocalStorageHelperService } from './../../../shares/services/token-storage/localstorage-helper.service';
import { AuthService } from './../../../shares/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { catchError, switchMap } from 'rxjs';
import { UserService } from 'src/app/shares/services/user/user.service';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss']
})
export class ValidateEmailComponent implements OnInit {
  formOTP = this.initFormOTP();
  secondTimeline = 120;
  constructor(private translateService: TranslateService,
              private authService: AuthService,
              private localStorageHelperService: LocalStorageHelperService,
              private userService: UserService,
              private router: Router,
              private notifyService: NotifyService
              ) { }

  ngOnInit(): void {
    const currentLanguage = this.translateService.currentLang;
    this.translateService.use(currentLanguage || 'vi');
    this.startTime();
  }

  startTime(): void {
    this.secondTimeline = 120;
    const interval = setInterval(() => {
      if (this.secondTimeline > 0) {
        this.secondTimeline--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
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
        return this.authService.login(user, true);
      }),
      switchMap((res) => {
        this.localStorageHelperService.saveToken(res.accessToken.toString());
        this.localStorageHelperService.saveRefreshToken(res.refreshToken.toString());
        this.localStorageHelperService.saveIsVerify(res.isConfirmEmail);
        return this.userService.getMe();
      }),
      catchError((err) => {
        this.notifyService.error('Can not verify your email please try again!', 'Error');
        this.formOTP.reset();
        document.getElementById('number1')?.focus();
        return err;
      })
    ).subscribe((data: any) => {
      this.localStorageHelperService.addUser(data);
      this.router.navigate(['/home/newest/posts']);
    });
  }

  resendOTP(): void {
    const user = this.localStorageHelperService.getUser();
    console.log(user);
    this.startTime();
  }
}
