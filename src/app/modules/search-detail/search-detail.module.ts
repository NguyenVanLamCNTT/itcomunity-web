import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDetailRoutingModule } from './search-detail-routing.module';
import { SearchDetailComponent } from './search-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ShareUiModule } from 'src/app/shares/share-ui/share-ui.module';


@NgModule({
  declarations: [
    SearchDetailComponent
  ],
  imports: [
    CommonModule,
    SearchDetailRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    ShareUiModule
  ]
})
export class SearchDetailModule { }
