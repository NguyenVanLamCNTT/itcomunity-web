import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'newest',
        pathMatch: 'full'
      },
      {
        path: 'content-creator',
        loadChildren: () => import('../content-creator/content-creator.module').then(m => m.ContentCreatorModule)
      },
      {
        path: 'newest',
        loadChildren: () => import('../newest/newest.module').then(m => m.NewestModule)
      },
      {
        path: 'trending',
        loadChildren: () => import('../trending/trending.module').then(m => m.TrendingModule)
      },
      {
        path: 'editors-choise',
        loadChildren: () => import('../editors-choise/editors-choise.module').then(m => m.EditorsChoiseModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
