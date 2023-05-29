import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiPath } from '../../constance/api-path';
import { Observable, map } from 'rxjs';
import { ApiService } from '../_core/api.service';
import { HttpResponse } from '@angular/common/http';

const apiUrl = environment.apiUrl;
const path = apiPath.qa;

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {

  constructor(private apiService: ApiService) { }

  public createQuestion(question: any): Observable<any> {
    const url = `${apiUrl}/${path.question}`;
    return this.apiService.post(url, question)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public getQuestion(page?: number, perPage?: number, sort?: string, username?: string, search?: string, isDeleted?: boolean): Observable<any> {
    const url = `${apiUrl}/${path.question}?page=${page}&perPage=${perPage}` + (username ? `&username=${username}` : '') + (search ? `&search=${search}` : '') + (isDeleted ? `&isDeleted=${isDeleted}` : '');
    return this.apiService.getNoToken(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public createAnswer(answer: any): Observable<any> {
    const url = `${apiUrl}/${path.answer}`;
    return this.apiService.post(url, answer)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public getAnswer(questionId: number, page?: number, perPage?: number, sort?: string, username?: string): Observable<any> {
    const url = `${apiUrl}/${path.question}/${questionId}/answer?page=${page}&perPage=${perPage}` + (username ? `&username=${username}` : '');
    return this.apiService.getNoToken(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public getQuestionsById(questionId: number): Observable<any> {
    const url = `${apiUrl}/${path.question}/${questionId}`;
    return this.apiService.getNoToken(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public updateQuestion (questionId: number, question: any): Observable<any> {
    const url = `${apiUrl}/${path.question}/${questionId}`;
    return this.apiService.put(url, question)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public updateAnswer (questionId: number, answer: any): Observable<any> {
    const url = `${apiUrl}/${path.answer}/${questionId}`;
    return this.apiService.put(url, answer)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public approvedAnswer (answerId: number, approved: boolean): Observable<any> {
    const url = `${apiUrl}/${path.answer}/${answerId}`;
    return this.apiService.patch(url, {approved})
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public deleteQuestion (questionId: number): Observable<any> {
    const url = `${apiUrl}/${path.question}/${questionId}`;
    return this.apiService.delete(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }

  public deleteAnswer (answerId: number): Observable<any> {
    const url = `${apiUrl}/${path.question}/answer/${answerId}`;
    return this.apiService.delete(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }
}
