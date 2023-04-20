import { LoadingServiceService } from './../../../../shares/services/loading/loading-service.service';
import { QuestionAnswerService } from './../../../../shares/services/question-answers/question-answer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit{
  questionId: any;
  question: any;
  constructor(private activatedRoute: ActivatedRoute,
    private questionAnswerService: QuestionAnswerService,
    private loadingServiceService: LoadingServiceService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.questionId = res?.id;
    });
    this.listenService();
  }

  listenService(): void {
    this.loadingServiceService.showLoading();
    this.questionAnswerService.getQuestionsById(this.questionId).subscribe((question: any) => {
      this.question = question;
      this.loadingServiceService.hideLoading();
    });
  }

  parseObject(tag: string): string {
    return JSON.parse(tag).name;
  }
}
