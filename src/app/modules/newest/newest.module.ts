import { ShareUiModule } from './../../shares/share-ui/share-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewestRoutingModule } from './newest-routing.module';
import { NewestComponent } from './newest.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    NewestComponent
  ],
  imports: [
    CommonModule,
    NewestRoutingModule,
    ShareUiModule,
    NgxPaginationModule
  ]
})
export class NewestModule { }
