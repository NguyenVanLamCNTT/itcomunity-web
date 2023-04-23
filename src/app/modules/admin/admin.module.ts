import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ShareUiModule } from 'src/app/shares/share-ui/share-ui.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { PostsManagerComponent } from './posts-manager/posts-manager.component';
import { SeriesManagerComponent } from './series-manager/series-manager.component';
import { UsersManagerComponent } from './users-manager/users-manager.component';
import { QuestionsManagerComponent } from './questions-manager/questions-manager.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TopicsManagerComponent } from './topics-manager/topics-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageHelperService } from 'src/app/shares/services/token-storage/localstorage-helper.service';
import { UploadFileService } from 'src/app/shares/services/uploadFile/upload-file.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardAdminComponent,
    PostsManagerComponent,
    SeriesManagerComponent,
    UsersManagerComponent,
    QuestionsManagerComponent,
    TopicsManagerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareUiModule,
    MatTableModule,
    MatPaginatorModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    LocalStorageHelperService,
    UploadFileService
  ]
})
export class AdminModule { }
