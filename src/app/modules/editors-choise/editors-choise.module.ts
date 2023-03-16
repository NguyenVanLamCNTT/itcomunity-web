import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorsChoiseRoutingModule } from './editors-choise-routing.module';
import { EditorsChoiseComponent } from './editors-choise.component';


@NgModule({
  declarations: [
    EditorsChoiseComponent
  ],
  imports: [
    CommonModule,
    EditorsChoiseRoutingModule
  ]
})
export class EditorsChoiseModule { }
