import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authState: AuthService,
              private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authState.checkLogin()){
      if (this.authState.checkIsVerify()) {
        return true;
      } else {
        this.router.navigate(['/auth/validate-email']);
        return false;
      }
    }else{
      this.router.navigate(['/auth/login'])
      return false;
    }
  }
}
