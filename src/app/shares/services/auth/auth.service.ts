import { Router } from '@angular/router';
import { LocalStorageHelperService } from '../token-storage/localstorage-helper.service';
import { Injectable } from '@angular/core';
import { ApiService } from "../_core/api.service";
import { BehaviorSubject, Observable } from "rxjs";
import { Token } from "../../models/token/token";
import { apiPath } from "../../constance/api-path";
import { environment } from "../../../../environments/environment";
import { HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { User } from '../../models/user/user';

const apiUrl = environment.apiUrl;
const path = apiPath.auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoginSubject = new BehaviorSubject<boolean>(false);
  public isLogin$ = this.isLoginSubject.asObservable();

  constructor(private apiService: ApiService,
    private localStorageHelperService: LocalStorageHelperService,
    private router: Router) { }

  public isLogin(isLogin: boolean): void {
    this.isLoginSubject.next(isLogin);
  }

  public login(user: User, remember?: boolean): Observable<Token> {
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

  public register(user: User): Observable<User> {
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

  public refreshToken(refreshToken: string): Observable<Token> {
    const url = `${apiUrl}/${path.refreshToken}`;
    return this.apiService.postNoHeader(url, {refreshToken})
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return Token.fromJson(JSON.stringify(body));
        })
      );
  }

  public sendOTP(username: string): Observable<any> {
    const url = `${apiUrl}/${path.sendOTP}`;
    const data = { username };
    return this.apiService.postNoHeader(url, data).pipe(
      map((httpResponse: HttpResponse<any>) => {
        const body = httpResponse.body.data;
        return Token.fromJson(JSON.stringify(body));
      })
    );;
  }

  public verifyOTP(email: string, otp: number): Observable<any> {
    const url = `${apiUrl}/${path.verifyOTP}`;
    const data = { email, otp };
    return this.apiService.postNoHeader(url, data).pipe(
      map((httpResponse: HttpResponse<any>) => {
        const body = httpResponse.body.data;
        return Token.fromJson(JSON.stringify(body));
      })
    );
  }

  logout() {
    this.localStorageHelperService.signOut();
    this.router.navigate(['/auth/login'], {
      queryParams: {},
    });
  }

  checkLogin(): boolean {
    return this.checkIsVerify() && this.localStorageHelperService.getToken() && this.localStorageHelperService.getRefreshToken();
  }

  checkIsVerify(): boolean {
    return this.localStorageHelperService.getIsVerify();
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    const url = `${apiUrl}/${path.changePassword}`;
    const data = { oldPassword, newPassword };
    return this.apiService.patch(url, data).pipe(
      map((httpResponse: HttpResponse<any>) => {
        const body = httpResponse.body.data;
        return body;
      })
    );
  }
}
