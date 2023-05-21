import { AuthService } from 'src/app/shares/services/auth/auth.service';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { TopicService } from 'src/app/shares/services/topic/topic.service';
import { LoadingServiceService } from './../../shares/services/loading/loading-service.service';
import { UserService } from './../../shares/services/user/user.service';
import { QuestionAnswerService } from './../../shares/services/question-answers/question-answer.service';
import { PostsService } from './../../shares/services/posts/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {
  isPosts: boolean = true;
  isQuestions: boolean = false;
  isAuthor: boolean = false;
  isTopics: boolean = false;
  searchValue: string = '';
  listPosts: any;
  listQuestions: any;
  listUsers: any;
  listTopics: any;
  searchForm = this.initForm();
  isLogin: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
              private postsService: PostsService,
              private questionAnswerService: QuestionAnswerService,
              private userService: UserService,
              private loadingServiceService: LoadingServiceService,
              private router: Router,
              private topicService: TopicService,
              private notifyService: NotifyService,
              private authService: AuthService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.searchValue = params.search;
      this.searchForm.get('search')?.setValue(this.searchValue);
      this.listenSearch();
    });
    this.setActiveMenu('posts');
    this.isLogin = this.authService.checkLogin();
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
    const topics = document.getElementById('topics');
    switch (item) {
      case 'posts':
        posts?.classList.add('active');
        questions?.classList.remove('active');
        author?.classList.remove('active');
        topics?.classList.remove('active');
        this.isPosts = true;
        this.isQuestions = false;
        this.isAuthor = false;
        this.isTopics = false;
        break;
      case 'questions':
        questions?.classList.add('active');
        posts?.classList.remove('active');
        author?.classList.remove('active');
        topics?.classList.remove('active');
        this.isPosts = false;
        this.isQuestions = true;
        this.isAuthor = false;
        this.isTopics = false;
        break;
      case 'author':
        author?.classList.add('active');
        posts?.classList.remove('active');
        questions?.classList.remove('active');
        topics?.classList.remove('active');
        this.isPosts = false;
        this.isQuestions = false;
        this.isAuthor = true;
        this.isTopics = false;
        break;
      case 'topics':
        topics?.classList.add('active');
        posts?.classList.remove('active');
        questions?.classList.remove('active');
        author?.classList.remove('active');
        this.isPosts = false;
        this.isQuestions = false;
        this.isAuthor = false;
        this.isTopics = true;
        break;
      default:
        posts?.classList.add('active');
        questions?.classList.remove('active');
        author?.classList.remove('active');
        topics?.classList.remove('active');
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
    // this.topicService.getTopic(1, 30, undefined, undefined, this.searchValue).subscribe((data: any) => {
    //   this.loadingServiceService.hideLoading();
    //   this.listTopics = data.items;
    //   console.log(this.listTopics);
    // });
    this.topicService.getTopic(1, 30, undefined, undefined, this.searchValue).pipe(
      switchMap((res: any) => {
        if (res.items) {
          this.listTopics = res.items;
        }
        return this.userService.getMe();
      })
    ).subscribe((res: any) => {
      this.listTopics = this.listTopics.map((topic: any) => {
        if (res.followTopicIds?.includes(topic.id)) {
          topic.isFollowing = true;
        }
        return topic;
      });
      this.loadingServiceService.hideLoading();
    }, (err: any) => {
      console.log(err);
      this.loadingServiceService.hideLoading();
    });
  }

  followingTopic(topic: any): void {
    if (!this.isLogin) {
      this.notifyService.error('Please login to follow topic!', 'Error');
      this.router.navigate(['/auth/login']);
      return;
    }
    this.topicService.addTopicToUser(topic.id).subscribe((res: any) => {
      this.listTopics.items = this.listTopics.map((item: any) => {
        if (item.id === topic.id) {
          item.isFollowing = true;
          this.notifyService.success('Follow topic successfully!', 'Success');
        }
        return item;
      });
    }, (err: any) => {
      this.notifyService.error('Follow topic failed!', 'Error');
    });
  }

  unFollowingTopic(topic: any): void {
    this.topicService.removeTopicFromUser(topic.id).subscribe((res: any) => {
      this.listTopics.items = this.listTopics.map((item: any) => {
        if (item.id === topic.id) {
          this.notifyService.success('UnFollow topic successfully!', 'Success');
          item.isFollowing = false;
        }
        return item;
      });
    }, (err: any) => {
      this.notifyService.error('UnFollow topic failed!', 'Error');
    });
  }

}
