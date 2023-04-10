import { QuestionAnswerService } from './../../services/question-answers/question-answer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-ask',
  templateUrl: './sidebar-ask.component.html',
  styleUrls: ['./sidebar-ask.component.scss']
})
export class SidebarAskComponent implements OnInit {
  questions: any;
  constructor(private questionAnswerService: QuestionAnswerService) { }

  ngOnInit(): void {
    this.listenService();
  }

  listenService() {
    this.questionAnswerService.getQuestion(1, 5).subscribe((res: any) => {
      this.questions = res.items;
    });
  }
}
