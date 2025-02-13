import { Injectable } from '@angular/core';
import { apiPath } from "../../constance/api-path";
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../../models/user/user';

const key = apiPath.cookie;
@Injectable({
  providedIn: 'root'
})
export class LocalStorageHelperService {
  constructor(private localStorageService: LocalStorageService) { }
  public saveToken(token: string): void {
    this.localStorageService.store(key.ID_KEY, token);
  }
  public getToken(): any {
    return this.localStorageService.retrieve(key.ID_KEY);
  }
  public saveRefreshToken(token: string): void {
    this.localStorageService.store(key.Refresh_Token, token);
  }
  public getRefreshToken(): any {
    return this.localStorageService.retrieve(key.Refresh_Token);
  }

  public saveIsVerify(isVerify: any): void {
    this.localStorageService.store(key.isVerify, isVerify);
  }

  public saveRole(role: any): void {
    this.localStorageService.store(key.ROLE, role);
  }

  public getRole(): any {
    return this.localStorageService.retrieve(key.ROLE);
  }

  public getIsVerify(): any {
    return this.localStorageService.retrieve(key.isVerify);
  }

  public signOut(): void {
    this.localStorageService.clear();
  }

  public saveUsername(username: string): void {
    this.localStorageService.store(key.USERNAME_KEY, username);
  }

  public getUsername(): void {
    this.localStorageService.retrieve(key.USERNAME_KEY);
  }

  public addUser(user: User): void {
    this.localStorageService.store(key.USER, JSON.stringify(user));
  }

  public getUser(): User {
    return this.localStorageService.retrieve(key.USER) ? JSON.parse(this.localStorageService.retrieve(key.USER)) : [];
  }
  
  public clearOrder(): any {
    this.localStorageService.clear(key.USER);
    this.localStorageService.clear(key.CART);
  }

  public saveLanguage(language: string): void {
    this.localStorageService.store(key.LANGUAGE, language);
  }

  public getLanguage(): any {
    return this.localStorageService.retrieve(key.LANGUAGE);
  }
}
