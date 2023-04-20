import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  isLoading$ = new BehaviorSubject<boolean>(false);
  constructor() { }

  showLoading(): void {
    this.isLoading$.next(true);
  }

  hideLoading(): void {
    this.isLoading$.next(false);
  }
}
