import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shares/guard/auth.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('../../modules/posts/posts.module').then(m => m.PostsModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('../../modules/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'account',
        loadChildren: () => import('../../modules/account/account.module').then(m => m.AccountModule),
      },
      {
        path: 'series',
        loadChildren: () => import('../../modules/series/series.module').then(m => m.SeriesModule),
      },
      {
        path: 'questions',
        loadChildren: () => import('../../modules/questions/questions.module').then(m => m.QuestionsModule),
      },
      {
        path: 'search',
        loadChildren: () => import('../../modules/search-detail/search-detail.module').then(m => m.SearchDetailModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
