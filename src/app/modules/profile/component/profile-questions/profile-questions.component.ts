import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shares/services/auth/auth.service';
import { QuestionAnswerService } from 'src/app/shares/services/question-answers/question-answer.service';

@Component({
  selector: 'app-profile-questions',
  templateUrl: './profile-questions.component.html',
  styleUrls: ['./profile-questions.component.scss']
})
export class ProfileQuestionsComponent {
  isLogin: boolean = false;
  username: any;
  listQuestions: any;
  page: number = 1;
  count: number = 0;
  itemsSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor (private questionAnswerService: QuestionAnswerService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.isLogin = this.authService.checkLogin();
    this.activatedRoute.params.subscribe((params: any) => {
      this.username = params.username;
      this.listenService();
    });
  }

  listenService(page = 1, itemsSize = 10, sort = 'desc'): void {
    this.questionAnswerService.getQuestion(page, itemsSize, sort, this.username).subscribe((series: any) => {
      this.listQuestions = series;
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenService(this.page, this.itemsSize);
  }
}
