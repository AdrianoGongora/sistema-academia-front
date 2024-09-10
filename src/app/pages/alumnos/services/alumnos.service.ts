import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AlumnoResponse } from '../models/alumnos-response.interface';
import { environment as env } from '../../../../environments/environment.development';
import { endpoint } from '../../../shared/utils/endpoints';
import { BaseResponse } from '../../../shared/common/base-response.interface';
import { getIcon } from '../../../shared/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private readonly _httpClient = inject(HttpClient);

  getAll(
    page: number,
    size: number,
    getInputs: string): Observable<BaseResponse<AlumnoResponse>> {
    const requestUrl = `${env.api}${endpoint.LIST_ALUMNOS}?page=${page}&pageSize=${size}${getInputs}`;

    return this._httpClient.get<BaseResponse<AlumnoResponse>>(requestUrl).pipe(
      map((resp) => {
        resp.value.data.forEach(function (c: AlumnoResponse) {
          c.icEdit = getIcon('icEdit', 'Editar Alumno', true, 'edit');
          c.icDelete = getIcon('icDelete', 'Eliminar Alumno', true, 'delete');
        });
        return resp;
      })
    )
  }

}
