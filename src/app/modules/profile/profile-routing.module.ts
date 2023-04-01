import { ProfileSeriesComponent } from './component/profile-series/profile-series.component';
import { ProfilePostsComponent } from './component/profile-posts/profile-posts.component';
import { ProfileInfoComponent } from './component/profile-info/profile-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: ':username/posts',
        pathMatch: 'full'
      },
      {
        path: ':username',
        component: ProfileInfoComponent,
      },
      {
        path: ':username/posts',
        component: ProfilePostsComponent,
      },
      {
        path: ':username/series',
        component: ProfileSeriesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
