import { TranslateModule } from '@ngx-translate/core';
import { ShareUiModule } from 'src/app/shares/share-ui/share-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './component/profile-info/profile-info.component';
import { ProfilePostsComponent } from './component/profile-posts/profile-posts.component';
import { ProfileSeriesComponent } from './component/profile-series/profile-series.component';
import { ProfileQuestionsComponent } from './component/profile-questions/profile-questions.component';
import { ProfileFollowingComponent } from './component/profile-following/profile-following.component';
import { ProfileFollowerComponent } from './component/profile-follower/profile-follower.component';
import { ProfileContactComponent } from './component/profile-contact/profile-contact.component';
import { ProfileSidebarComponent } from './component/profile-sidebar/profile-sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    ProfilePostsComponent,
    ProfileSeriesComponent,
    ProfileQuestionsComponent,
    ProfileFollowingComponent,
    ProfileFollowerComponent,
    ProfileContactComponent,
    ProfileSidebarComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ShareUiModule,
    TranslateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    NgxPaginationModule
  ]
})
export class ProfileModule { }
