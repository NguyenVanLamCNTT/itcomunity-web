import { ApiService } from './../_core/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiPath } from '../../constance/api-path';
import { HttpResponse, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Posts } from '../../models/posts/posts';

const apiUrl = environment.apiUrl;
const path = apiPath.posts;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private apiService: ApiService) { }

  public createPosts(posts: Posts): Observable<Posts> {
    const url = `${apiUrl}/${path.posts}`;
    return this.apiService.post(url, posts)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public getPosts(page?: number, perPage?: number, sort?: string, username?: string): Observable<Posts[]> {
    const url = `${apiUrl}/${path.posts}?page=${page}&perPage=${perPage}` + (username ? `&username=${username}` : '');
    const params: HttpParams = new HttpParams();
    page && params.set('page', page.toString());
    perPage && params.set('perPage', perPage.toString());
    // sort && params.set('sort', sort);
    return this.apiService.getNoToken(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public getPostsByUserFollow(page?: number, perPage?: number, sort?: string, username?: string): Observable<Posts> {
    const url = `${apiUrl}/${path.postsByUserFollow}?page=${page}&perPage=${perPage}` + (username ? `&username=${username}` : '');
    return this.apiService.get(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public getPostsBySeries(seriesId: number): Observable<Posts> {
    const url = `${apiUrl}/${path.postsBySeries}/${seriesId}`;
    return this.apiService.getNoToken(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public getPostsById(id: number): Observable<Posts> {
    const url = `${apiUrl}/${path.posts}/${id}`;
    return this.apiService.getNoToken(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public updatePosts(id: number, posts: Posts): Observable<any> {
    const url = `${apiUrl}/${path.posts}/${id}`;
    return this.apiService.put(url, posts)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public deletePosts(id: number): Observable<any> {
    const url = `${apiUrl}/${path.posts}/${id}`;
    return this.apiService.delete(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public updateView(postId: number): Observable<any> {
    const url = `${apiUrl}/${path.view}`;
    return this.apiService.patch(url, {postId})
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public bookmarkPosts(postId: any, bookmark: boolean): Observable<any> {
    const url = `${apiUrl}/${path.bookmark}`;
    return this.apiService.post(url, {postId, bookmark})
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public getPostsByBookmark(page?: number, perPage?: number, sort?: string): Observable<Posts> {
    const url = `${apiUrl}/${path.getBookmarks}?page=${page}&perPage=${perPage}`;
    return this.apiService.get(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }
}
