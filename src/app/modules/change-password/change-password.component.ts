import { NotifyService } from './../../shares/services/notify/notify.service';
import { AuthService } from 'src/app/shares/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit{
  changePasswordForm: any;
  constructor(private authService: AuthService,
              private notifyService: NotifyService,
              private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    }, { 
      validator: ConfirmedValidator('newPassword', 'confirmPassword')
    });
  }

  cancel() {
    history.back();
  }

  changePassword() {
    const oldPassword = this.changePasswordForm.get('oldPassword')?.value;
    const newPassword = this.changePasswordForm.get('newPassword')?.value;
    this.authService.changePassword(oldPassword, newPassword).subscribe(res => {
      if(res) {
        this.changePasswordForm.reset();
        this.notifyService.success('Change password success!', 'Success');
      }
    }, err => {
      this.notifyService.error('Change password fail!', 'Error');
    });
  }

  get f(){
    return this.changePasswordForm.controls;
  }
}
