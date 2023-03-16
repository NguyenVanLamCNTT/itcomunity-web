import { Injectable } from '@angular/core';
import {apiPath} from "../../constance/api-path";
import {LocalStorageService} from 'ngx-webstorage';

const key = apiPath.cookie;
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
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

  public getIsVerify(): any {
    return this.localStorageService.retrieve(key.isVerify);
  }

  public signOut(): void {
    this.localStorageService.clear();
  }
  public saveUsername(username: string): void {
    this.localStorageService.store(key.USERNAME_KEY, username);
  }
  public getUsername(): void{
    this.localStorageService.retrieve(key.USERNAME_KEY);
  }
  public addCart(product: any): void{
    this.localStorageService.store(key.CART, JSON.stringify(product));
  }
  public getCartItem(): any{
    return this.localStorageService.retrieve(key.CART) ? JSON.parse(this.localStorageService.retrieve(key.CART)) : [];
  }
  public addUser(user: any): void{
    this.localStorageService.store(key.USER, JSON.stringify(user));
  }
  public getUser(): any{
    return this.localStorageService.retrieve(key.USER) ? JSON.parse(this.localStorageService.retrieve(key.USER)) : [];
  }
  public clearOrder(): any{
    this.localStorageService.clear(key.USER);
    this.localStorageService.clear(key.CART);
  }
}
