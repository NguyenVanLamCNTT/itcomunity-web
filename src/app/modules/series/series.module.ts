import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { CreateSeriesComponent } from './create-series/create-series.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ShareUiModule } from 'src/app/shares/share-ui/share-ui.module';
import { MyCkEditorModule } from 'src/app/shares/ckeditor/my-ck-editor/my-ck-editor.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    SeriesComponent,
    CreateSeriesComponent,
    SeriesDetailComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    TranslateModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    ShareUiModule,
    ReactiveFormsModule,
    FormsModule,
    MyCkEditorModule,
    DragDropModule,
    NgbTooltipModule,
    NgxPaginationModule
  ],
  providers: [
    NotifyService
  ]
})
export class SeriesModule { }
