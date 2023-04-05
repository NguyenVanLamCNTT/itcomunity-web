import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiPath } from '../../constance/api-path';
import { ApiService } from '../_core/api.service';
import { Observable, map } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

const apiUrl = environment.apiUrl;
const path = apiPath.comment;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private apiService: ApiService) { }

  public createComment(comment: any): Observable<any> {
    const url = `${apiUrl}/${path.comment}`;
    return this.apiService.post(url, comment)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public getComments(page?: number, perPage?: number, postsId?: number, seriesId?: number): Observable<any> {
    const url = `${apiUrl}/${path.comment}?page=${page}&perPage=${perPage}` + (postsId ? `&postId=${postsId}` : '') + (seriesId ? `&seriesId=${seriesId}` : '');
    return this.apiService.get(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }
}
