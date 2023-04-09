import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions.component';
import { CreateQuestionComponent } from './component/create-question/create-question.component';
import { QuestionDetailComponent } from './component/question-detail/question-detail.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
    children: [
      {
        path: '',
        redirectTo: 'unanswered',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateQuestionComponent
      },
      {
        path: ':id',
        component: QuestionDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
