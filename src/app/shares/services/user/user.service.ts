import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiPath } from '../../constance/api-path';
import { User } from '../../models/user/user';
import { ApiService } from '../_core/api.service';

const apiUrl = environment.apiUrl;
const path = apiPath.user;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getAllUsers(): Observable<User[]>{
    const url = `${apiUrl}/${path.allUser}`;
    return this.apiService.get(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  getMe(): Observable<User>{
    const url = `${apiUrl}/${path.getMe}`;
    return this.apiService.get(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }
}
