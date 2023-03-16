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
    private router: Router
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
    console.log('infoRegister', this.infoRegister.value);
    const user = new User();
    user.username = this.infoRegister.value.username;
    user.password = this.infoRegister.value.password;
    user.email = this.infoRegister.value.email;
    user.age = this.infoRegister.value.age;
    user.gender = this.infoRegister.value.gender;
    user.fullname = this.infoRegister.value.fullname;
    console.log('user', user);
    this.authService.register(user).pipe(
      mergeMap((res: any) => {
        return this.authService.login(user, false);
      })
    ).subscribe((data: any) => {
      if (data && !data.isConfirmEmail) {
        this.router.navigate(['/auth/validate-email']);
        return;
      }
    });
  }
}
