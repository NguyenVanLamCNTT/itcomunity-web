import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSeriesComponent } from './create-series/create-series.component';
import { SeriesComponent } from './series.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesComponent,
    children: [
      {
        path: 'create',
        component: CreateSeriesComponent
      },
      {
        path: ':id',
        component: SeriesDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
