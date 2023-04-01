import { LocalStorageHelperService } from './../../../shares/services/token-storage/localstorage-helper.service';
import { map, mergeMap } from 'rxjs/operators';
import { Token } from './../../../shares/models/token/token';
import { User } from './../../../shares/models/user/user';
import { AuthService } from './../../../shares/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) { }

  ngOnInit(): void {
  }

  initFormRegister(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required]),
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
      })
    ).subscribe((data: any) => {
      this.router.navigate(['/auth/validate-email']);
    });
  }
}
