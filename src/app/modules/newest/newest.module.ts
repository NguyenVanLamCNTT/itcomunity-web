import { ShareUiModule } from './../../shares/share-ui/share-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewestRoutingModule } from './newest-routing.module';
import { NewestComponent } from './newest.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NewestPostsComponent } from './newest-posts/newest-posts.component';
import { NewestSeriesComponent } from './newest-series/newest-series.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    NewestComponent,
    NewestPostsComponent,
    NewestSeriesComponent
  ],
  imports: [
    CommonModule,
    NewestRoutingModule,
    ShareUiModule,
    NgxPaginationModule,
    MatButtonModule
  ]
})
export class NewestModule { }
