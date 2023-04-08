import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { CreateQuestionComponent } from './component/create-question/create-question.component';
import { QuestionDetailComponent } from './component/question-detail/question-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCkEditorModule } from 'src/app/shares/ckeditor/my-ck-editor/my-ck-editor.module';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslateModule } from '@ngx-translate/core';
import { ShareUiModule } from 'src/app/shares/share-ui/share-ui.module';


@NgModule({
  declarations: [
    QuestionsComponent,
    CreateQuestionComponent,
    QuestionDetailComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
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
    MatRadioModule,
    ShareUiModule
  ]
})
export class QuestionsModule { }
