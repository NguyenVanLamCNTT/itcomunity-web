import { ApiService } from './../_core/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiPath } from '../../constance/api-path';
import { HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const apiUrl = environment.apiUrl;
const path = apiPath.posts;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private apiService: ApiService) { }

  public createPosts(posts: any): Observable<any>{
    const url = `${apiUrl}/${path.posts}`;
    return this.apiService.post(url, posts)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }
}
