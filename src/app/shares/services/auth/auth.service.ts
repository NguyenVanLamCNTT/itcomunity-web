import { Router } from '@angular/router';
import { TokenStorageService } from './../token-storage/token-storage.service';
import { Injectable } from '@angular/core';
import {ApiService} from "../_core/api.service";
import {Observable} from "rxjs";
import {Token} from "../../models/token/token";
import {apiPath} from "../../constance/api-path";
import {environment} from "../../../../environments/environment";
import {HttpResponse} from "@angular/common/http";
import {map} from "rxjs/operators";
import { User } from '../../models/user/user';

const apiUrl = environment.apiUrl;
const path = apiPath.auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService,
              private tokenStorageService: TokenStorageService,
              private router: Router) { }

  public login(user: User, remember?: boolean): Observable<Token>{
    console.log('user', user);
    const url = `${apiUrl}/${path.login}`;
    const loginData = {
      username: user.username,
      password: user.password,
      remember
    };
    return this.apiService.postNoHeader(url, loginData)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return Token.fromJson(JSON.stringify(body));
        })
      );
  }

  public register(user: User): Observable<User>{
    const url = `${apiUrl}/${path.register}`;
    const data = {
      username: user.username,
      password: user.password,
      email: user.email,
      age: user.age,
      fullName: user.fullname,
      gender: user.gender
    }
    return this.apiService.postNoHeader(url, data)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return User.fromJson(JSON.stringify(body));
        })
      );
  }

  public refreshToken(refreshToken: string): Observable<Token>{
    const url = `${apiUrl}/${path.refreshToken}`;
    const refreshData = {token: refreshToken};
    return this.apiService.postNoHeader(url, refreshData)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return Token.fromJson(JSON.stringify(body));
        })
      );
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login'], {
      queryParams: {},
    });
  }
  
  checkLogin(): boolean{
    return this.tokenStorageService.getToken() && this.tokenStorageService.getRefreshToken();
 }
}
