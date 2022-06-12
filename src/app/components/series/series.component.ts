import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Series } from 'src/app/models/serie';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent {
  public series$: Observable<Series[]>;
  public serie$!: Observable<Series>;

  constructor(private svc: SerieService) {
    this.series$ = this.svc.getSeries();
  }

  public getSaisons(id: number) {
    this.svc.getSaisons(id);
    this.serie$ = this.svc.serie$;
  }
}
