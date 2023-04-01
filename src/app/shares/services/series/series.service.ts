import { ApiService } from './../_core/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiPath } from '../../constance/api-path';
import { map, Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

const apiUrl = environment.apiUrl;
const path = apiPath.series;

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private apiService: ApiService) { }

  public getSeries(page?: number, perPage?: number, sort?: string): Observable<any[]> {
    const url = `${apiUrl}/${path.series}?page=${page}&perPage=${perPage}`;
    return this.apiService.get(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public getSeriesById(seriesId: number): Observable<any> {
    const url = `${apiUrl}/${path.series}/${seriesId}`;
    return this.apiService.get(url)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }

  public createSeries(series: any): Observable<any> {
    const url = `${apiUrl}/${path.series}`;
    return this.apiService.post(url, series)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return body || {};
        })
      );
  }
}
