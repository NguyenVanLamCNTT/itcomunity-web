import { LoadingServiceService } from './../../shares/services/loading/loading-service.service';
import { UserService } from './../../shares/services/user/user.service';
import { QuestionAnswerService } from './../../shares/services/question-answers/question-answer.service';
import { PostsService } from './../../shares/services/posts/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {
  isPosts: boolean = true;
  isQuestions: boolean = false;
  isAuthor: boolean = false;
  searchValue: string = '';
  listPosts: any;
  listQuestions: any;
  listUsers: any;
  searchForm = this.initForm();
  constructor(private activatedRoute: ActivatedRoute,
              private postsService: PostsService,
              private questionAnswerService: QuestionAnswerService,
              private userService: UserService,
              private loadingServiceService: LoadingServiceService,
              private router: Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.searchValue = params.search;
      this.searchForm.get('search')?.setValue(this.searchValue);
      this.listenSearch();
    });
    this.setActiveMenu('posts');
  }

  initForm(): FormGroup {
    return new FormGroup({
      search: new FormControl('')
    });
  }

  setActiveMenu(item: string) {
    const posts = document.getElementById('posts');
    const questions = document.getElementById('questions');
    const author = document.getElementById('author');
    switch (item) {
      case 'posts':
        posts?.classList.add('active');
        questions?.classList.remove('active');
        author?.classList.remove('active');
        this.isPosts = true;
        this.isQuestions = false;
        this.isAuthor = false;
        break;
      case 'questions':
        questions?.classList.add('active');
        posts?.classList.remove('active');
        author?.classList.remove('active');
        this.isPosts = false;
        this.isQuestions = true;
        this.isAuthor = false;
        break;
      case 'author':
        author?.classList.add('active');
        posts?.classList.remove('active');
        questions?.classList.remove('active');
        this.isPosts = false;
        this.isQuestions = false;
        this.isAuthor = true;
        break;
      default:
        posts?.classList.add('active');
        questions?.classList.remove('active');
        author?.classList.remove('active');
        this.isPosts = true;
        this.isQuestions = false;
        this.isAuthor = false;
        break;
    }
  }

  onFilterChange(event: any): void {
    this.searchValue = event.target.value;
    if (this.searchValue === '') {
      this.listPosts = [];
      this.listQuestions = [];
      this.listUsers = [];
      return;
    }
  }

  submitSearch(): void {
    this.listenSearch();
    this.router.navigate([`/search/${this.searchValue}`]);
  }

  listenSearch(): void {
    this.loadingServiceService.showLoading();
    this.postsService.getPosts(1, 30, undefined, undefined, this.searchValue).subscribe((data: any) => {
      this.loadingServiceService.hideLoading();
      this.listPosts = data.items;
    });
    this.questionAnswerService.getQuestion(1, 30, undefined, undefined, this.searchValue).subscribe((data: any) => {
      this.loadingServiceService.hideLoading();
      this.listQuestions = data.items;
    });
    this.userService.getAllUsers(1, 30, undefined, undefined, this.searchValue).subscribe((data: any) => {
      this.loadingServiceService.hideLoading();
      this.listUsers = data.items;
    });
  }
}
