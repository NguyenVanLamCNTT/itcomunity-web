import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentCreatorRoutingModule } from './content-creator-routing.module';
import { ContentCreatorComponent } from './content-creator.component';


@NgModule({
  declarations: [
    ContentCreatorComponent
  ],
  imports: [
    CommonModule,
    ContentCreatorRoutingModule
  ]
})
export class ContentCreatorModule { }
