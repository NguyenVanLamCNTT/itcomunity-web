import { LocalStorageHelperService } from './../services/token-storage/localstorage-helper.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authState: AuthService,
    private localStorageHelperService: LocalStorageHelperService,
    private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.localStorageHelperService.getUser();
      console.log(user);
    if (this.authState.checkLogin()) {
      console.log(user);
      if (this.localStorageHelperService.getRole()) {
        return true;
      } else {
        this.router.navigate(['/home/newest/posts'])
        return false;
      }
    } else {
      this.router.navigate(['/auth/login'])
      return false;
    }
  }
}
