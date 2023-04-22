import { RouterModule } from '@angular/router';
import { ShareUiModule } from './../../shares/share-ui/share-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewestRoutingModule } from './newest-routing.module';
import { NewestComponent } from './newest.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NewestPostsComponent } from './newest-posts/newest-posts.component';
import { NewestSeriesComponent } from './newest-series/newest-series.component';
import {MatButtonModule} from '@angular/material/button';
import { NewestPostsFollowingsComponent } from './newest-posts-followings/newest-posts-followings.component';
import { NewestQuestionsComponent } from './newest-questions/newest-questions.component';
import { NewestContentCreatorComponent } from './newest-content-creator/newest-content-creator.component';
import { NewestMyBookmarkComponent } from './newest-my-bookmark/newest-my-bookmark.component';
import { ListPostsBookmarksComponent } from './newest-my-bookmark/component/list-posts-bookmarks/list-posts-bookmarks.component';
import { ListSeriesBookmarksComponent } from './newest-my-bookmark/component/list-series-bookmarks/list-series-bookmarks.component';
import { NewestTrendingComponent } from './newest-trending/newest-trending.component';

@NgModule({
  declarations: [
    NewestComponent,
    NewestPostsComponent,
    NewestSeriesComponent,
    NewestPostsFollowingsComponent,
    NewestQuestionsComponent,
    NewestContentCreatorComponent,
    NewestMyBookmarkComponent,
    ListPostsBookmarksComponent,
    ListSeriesBookmarksComponent,
    NewestTrendingComponent
  ],
  imports: [
    CommonModule,
    NewestRoutingModule,
    RouterModule,
    ShareUiModule,
    NgxPaginationModule,
    MatButtonModule
  ]
})
export class NewestModule { }
