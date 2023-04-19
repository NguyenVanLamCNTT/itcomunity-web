import { NotifyService } from './../../../shares/services/notify/notify.service';
import { LocalStorageHelperService } from './../../../shares/services/token-storage/localstorage-helper.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Token } from './../../../shares/models/token/token';
import { User } from './../../../shares/models/user/user';
import { AuthService } from './../../../shares/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  infoRegister = this.initFormRegister();
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageHelperService: LocalStorageHelperService,
    private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
  }

  initFormRegister(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      gender: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    });
  }

  register(): void {
    const user = new User();
    user.username = this.infoRegister.value.username;
    user.password = this.infoRegister.value.password;
    user.email = this.infoRegister.value.email;
    user.age = this.infoRegister.value.age;
    user.gender = this.infoRegister.value.gender;
    user.fullname = this.infoRegister.value.fullname;
    this.authService.register(user).pipe(
      mergeMap((res: any) => {
        user && this.localStorageHelperService.addUser(user);
        return this.authService.sendOTP(user.username!);
      }),
      catchError((err: any) => {
        this.notifyService.error('Register failed please try again!', 'Error');
        return of(err);
      })
    ).subscribe((data: any) => {
      this.router.navigate(['/auth/validate-email']);
    });
  }

  isControlValid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(formGroup: FormGroup, validation: any, controlName: any): boolean {
    const control = formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(formGroup: FormGroup, controlName: any): boolean {
    const control = formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
}
