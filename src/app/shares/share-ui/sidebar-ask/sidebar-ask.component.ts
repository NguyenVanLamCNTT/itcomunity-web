import { PostsService } from './../../services/posts/posts.service';
import { QuestionAnswerService } from './../../services/question-answers/question-answer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-ask',
  templateUrl: './sidebar-ask.component.html',
  styleUrls: ['./sidebar-ask.component.scss']
})
export class SidebarAskComponent implements OnInit {
  questions: any;
  listPosts: any;
  constructor(private questionAnswerService: QuestionAnswerService,
              private postsService: PostsService) { }

  ngOnInit(): void {
    this.listenService();
  }

  listenService() {
    this.questionAnswerService.getQuestion(1, 5).subscribe((res: any) => {
      this.questions = res.items;
    });
    this.postsService.getPosts(1, 5).subscribe((res: any) => {
      this.listPosts = res.items;
    });
  }
}
