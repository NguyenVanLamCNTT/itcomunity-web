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

  getAllUsers(page?: number, perPage?: number, sort?: string, username?: string, search?: string): Observable<User[]>{
    const url = `${apiUrl}/${path.allUser}?page=${page}&perPage=${perPage}` + (username ? `&username=${username}` : '') + (search ? `&search=${search}` : '');
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

  updateMe(user: User): Observable<User>{
    const url = `${apiUrl}/${path.getMe}`;
    return this.apiService.put(url, user)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  getByUsername(username: string): Observable<User>{
    const url = `${apiUrl}/${path.byUsername}?username=${username}`;
    return this.apiService.get(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  followingMember(userId: any, follow: boolean): Observable<any>{
    const url = `${apiUrl}/${path.follow}`;
    const data = {
      authorId: userId,
      follow
    }
    return this.apiService.post(url, data)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }
}
