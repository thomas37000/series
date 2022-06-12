import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from 'src/app/models/serie';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-saisons',
  templateUrl: './saisons.component.html',
  styleUrls: ['./saisons.component.css'],
})
export class SaisonsComponent {
  public serie$: Observable<Series>;

  constructor(private svc: SerieService) {
    this.serie$ = this.svc.serie$;
  }
}
