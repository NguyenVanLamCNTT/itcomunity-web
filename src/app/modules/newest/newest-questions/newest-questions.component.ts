import { QuestionAnswerService } from './../../../shares/services/question-answers/question-answer.service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shares/services/auth/auth.service';
import { LoadingServiceService } from 'src/app/shares/services/loading/loading-service.service';

@Component({
  selector: 'app-newest-questions',
  templateUrl: './newest-questions.component.html',
  styleUrls: ['./newest-questions.component.scss']
})
export class NewestQuestionsComponent {
  isLogin: boolean = false;
  listQuestions: any;
  page: number = 1;
  count: number = 0;
  itemsSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor (private questionAnswerService: QuestionAnswerService,
              private authService: AuthService,
              private loadingServiceService: LoadingServiceService) {
    
  }
  ngOnInit(): void {
    this.isLogin = this.authService.checkLogin();
    this.listenService();
  }

  listenService(page = 1, itemsSize = 10, sort = 'desc'): void {
    this.loadingServiceService.showLoading();
    this.questionAnswerService.getQuestion(page, itemsSize, sort).subscribe((series: any) => {
      this.listQuestions = series;
      this.loadingServiceService.hideLoading();
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenService(this.page, this.itemsSize);
  }
}
