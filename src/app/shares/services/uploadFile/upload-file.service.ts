import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiPath } from '../../constance/api-path';
import { ApiService } from '../_core/api.service';

const apiUrl = environment.apiUrl;
const path = apiPath.upload;

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private apiService: ApiService) { }

  public uploadFile(file: FormData): Observable<any>{
    const url = `${apiUrl}/${path.upload}`;
    return this.apiService.postFormData(url, file)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body.data;
          return body || {};
        })
      );
  }
}
