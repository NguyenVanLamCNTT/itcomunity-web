import { map, Observable } from 'rxjs';
import { ApiService } from './../_core/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiPath } from '../../constance/api-path';
import { HttpResponse } from '@angular/common/http';

const apiUrl = environment.apiUrl;
const path = apiPath.topic;

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private apiService: ApiService) { }
  
  public getTopic(page?: number, perPage?: number, sort?: string, username?: string, search?: string): Observable<any> {
    const url = `${apiUrl}/${path.topic}?page=${page}&perPage=${perPage}` + (sort ? `&sort=${sort}` : '') + (username ? `&username=${username}` : '') + (search ? `&search=${search}` : '');
    return this.apiService.getNoToken(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public createTopic(topic: any): Observable<any> {
    const url = `${apiUrl}/${path.topic}`;
    return this.apiService.post(url, topic)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public addTopicToUser(topicId: number) {
    const url = `${apiUrl}/${path.addTopic}`;
    return this.apiService.post(url, {topicId})
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public removeTopicFromUser(topicId: number) {
    const url = `${apiUrl}/${path.removeTopic}`;
    return this.apiService.post(url, {topicId})
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public deleteTopic(topicId: number): Observable<any> {
    const url = `${apiUrl}/${path.topic}/${topicId}`;
    return this.apiService.delete(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }
}
