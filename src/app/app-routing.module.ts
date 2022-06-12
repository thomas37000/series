import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { SaisonsComponent } from './components/saisons/saisons.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  { path: '', component: SeriesComponent },
  { path: 'serie/:id', component: SaisonsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
