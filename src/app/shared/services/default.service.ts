import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class DefaultService {

  constructor() { }

  abstract getAll(
    size: number,
    page: number,
    getInputs: string
  ): Observable<unknown>;

}
