import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ShareUiModule } from 'src/app/shares/share-ui/share-ui.module';
import { MyCkEditorModule } from 'src/app/shares/ckeditor/my-ck-editor/my-ck-editor.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    MyCkEditorModule,
    ReactiveFormsModule,
    TranslateModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    ShareUiModule
  ]
})
export class PostsModule { }
