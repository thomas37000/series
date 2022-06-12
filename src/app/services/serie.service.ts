import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Series } from '../models/serie';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  public series$: Observable<Series[]>;
  public serie$!: Observable<Series>;

  constructor(private http: HttpClient) {
    this.series$ = this.http.get<Series[]>(
      'http://10.103.0.254:8000/api/series.json'
    );
  }

  public getSeries(): Observable<Series[]> {
    return this.series$;
  }


  public getSaisons(id: any) {
    console.log(id);
    this.serie$ = this.http.get<Series>(
      'http://10.103.0.254:8000/api/series/' + id + '.json'
    );
  }
}
