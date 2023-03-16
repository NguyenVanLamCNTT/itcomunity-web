import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCkEditorComponent } from './my-ck-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { TokenStorageService } from '../../services/token-storage/token-storage.service';



@NgModule({
  declarations: [
    MyCkEditorComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
  ],
  exports: [
    MyCkEditorComponent
  ],
  providers: [
    TokenStorageService
  ]
})
export class MyCkEditorModule { }
