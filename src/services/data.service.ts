import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Data } from 'src/models/data.model';
import { data } from 'src/app/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
 
  getData(): Observable<Data[]> {
    return of(data);
  }

}
