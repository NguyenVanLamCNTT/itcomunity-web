import { TokenStorageService } from './../../shares/services/token-storage/token-storage.service';
import { AuthService } from './../../shares/services/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ValidateEmailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers: [
    AuthService,
    TokenStorageService
  ]
})
export class AuthModule { }
