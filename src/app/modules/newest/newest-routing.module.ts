import { NewestSeriesComponent } from './newest-series/newest-series.component';
import { NewestPostsComponent } from './newest-posts/newest-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewestComponent } from './newest.component';

const routes: Routes = [
  {
    path: '',
    component: NewestComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: NewestPostsComponent
      },
      {
        path: 'series',
        component: NewestSeriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewestRoutingModule { }
