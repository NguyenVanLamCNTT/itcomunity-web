import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import * as _ from 'lodash-es';
// import { keys } from 'lodash-es';
import {LocalStorageHelperService} from '../token-storage/localstorage-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient,
              private storageService: LocalStorageHelperService
  ) {
  }


  public setHeaders(headers?: any): HttpHeaders {
    const token = 'Bearer ' + this.storageService.getToken();
    // const token = '';
    let httpHeaders;

    if (token) {
      try {
        httpHeaders = new HttpHeaders(_.assign({
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: token
        }, headers));
      } catch (error) {
        // todo
        // this.storageService.deleteAll();
      }
    }
    // @ts-ignore
    return httpHeaders;
  }

  public setHeadersFormData(headers?: any): HttpHeaders {
    const token = 'Bearer ' + this.storageService.getToken();
    // const token = '';
    let httpHeaders;

    if (token) {
      try {
        httpHeaders = new HttpHeaders(_.assign({
          Authorization: token
        }, headers));
      } catch (error) {
        // todo
        // this.storageService.deleteAll();
      }
    }
    // @ts-ignore
    return httpHeaders;
  }
  public setHeadersNoToken(headers?: any): HttpHeaders {
    let token = '';
    if (this.storageService.getToken()) {
      token = 'Bearer ' + this.storageService.getToken();
    } else {
      token = '';
    }
    // const token = 'Bearer ' + this.storageService.getToken();
    // const token = '';
    let httpHeaders;

    if (token) {
      try {
        httpHeaders = new HttpHeaders(_.assign({
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: token
        }, headers));
      } catch (error) {
        // todo
        // this.storageService.deleteAll();
      }
    }
    // @ts-ignore
    return httpHeaders;
  }


  public setUrlEncodedHeaders(headers?: any): HttpHeaders {
    const token = 'Bearer ' + this.storageService.getToken();
    // const token = '';
    let httpHeaders;

    if (token) {
      try {
        httpHeaders = new HttpHeaders(_.assign({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: token
        }, headers));
      } catch (error) {
        // todo
        // this.storageService.deleteAll();
      }
    }
    // @ts-ignore
    return httpHeaders;
  }


  // tslint:disable-next-line:typedef
  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred.
      console.error('An error occurred: ', error.error.message);
    } else {
      return throwError(error);
    }
    return throwError('Something went wrong!');
  }


  public post(path: string, body: any, customHeader?: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(
      path, body,
      {
        headers: this.setHeaders(customHeader),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  public postFormData(path: string, body: any, customHeader?: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(
      path, body,
      {
        headers: this.setHeadersFormData(customHeader),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
  public postNoHeader(path: string, body: any, customHeader?: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(
      path, body,
      {
        headers: this.setHeadersNoToken(customHeader),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }


  public postUrlEncoded(path: string, body: any, customHeader?: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(
      path, body,
      {
        headers: this.setUrlEncodedHeaders(customHeader),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public get(path: string, options?: any, params?: HttpParams): Observable<any> {
    return this.httpClient.get(
      path,
      {
        headers: this.setHeaders(options),
        params,
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public getNoToken(path: string, options?: any, params?: HttpParams): Observable<any> {
    return this.httpClient.get(
      path,
      {
        headers: this.setHeadersNoToken(options),
        params,
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public put(path: string, body?: any): Observable<any> {
    return this.httpClient.put(
      path, body,
      {
        headers: this.setHeaders(),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public putFormdata(path: string, body?: any, customHeader?: any): Observable<any> {
    return this.httpClient.put(
      path, body,
      {
        headers: this.setHeadersFormData(customHeader),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }


  public delete(path: string): Observable<any> {
    return this.httpClient.delete(
      path,
      {
        headers: this.setHeaders(),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public patch(path: string, body: any): Observable<any> {
    return this.httpClient.patch(
      path, body,
      {
        headers: this.setHeaders(),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }
}
