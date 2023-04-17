import { NewestSeriesComponent } from './newest-series/newest-series.component';
import { NewestPostsComponent } from './newest-posts/newest-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewestComponent } from './newest.component';
import { NewestPostsFollowingsComponent } from './newest-posts-followings/newest-posts-followings.component';
import { NewestQuestionsComponent } from './newest-questions/newest-questions.component';
import { NewestContentCreatorComponent } from './newest-content-creator/newest-content-creator.component';
import { NewestMyBookmarkComponent } from './newest-my-bookmark/newest-my-bookmark.component';

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
      },
      {
        path: 'followings',
        component: NewestPostsFollowingsComponent
      },
      {
        path: 'questions',
        component: NewestQuestionsComponent
      },
      {
        path: 'content-creators',
        component: NewestContentCreatorComponent
      },
      {
        path: 'bookmarks',
        component: NewestMyBookmarkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewestRoutingModule { }
