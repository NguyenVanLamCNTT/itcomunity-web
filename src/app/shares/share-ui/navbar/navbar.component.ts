import { UserService } from './../../services/user/user.service';
import { QuestionAnswerService } from './../../services/question-answers/question-answer.service';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { LocalStorageHelperService } from './../../services/token-storage/localstorage-helper.service';
import { AuthService } from './../../services/auth/auth.service';
import { ChangeDetectionStrategy, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnChanges {
  isLogin: boolean = false;
  user: User | undefined;
  isMobile: boolean = false;
  isShowSearch: boolean = false;
  valueSearch: string = '';

  posts: any;
  series: any;
  questions: any;
  users: any;

  constructor(private authService: AuthService,
    private router: Router,
    private localStorageHelperService: LocalStorageHelperService,
    private postsService: PostsService,
    private questionAnswerService: QuestionAnswerService,
    private userService: UserService) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.isLogin = this.authService.checkLogin();
    this.getMe();
    this.isMobile = window.innerWidth < 768;
  }

  getMe(): void {
    this.user = this.localStorageHelperService.getUser();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home/newest/posts']);
  }

  closeModal(): void {
    this.isShowSearch = false;
  }

  onFilterChange(event: any): void {
    const value = event.target.value;
    this.valueSearch = value;
    if (value || value !== '') {
      this.postsService.getPosts(1, 3, undefined, undefined, event.target.value).subscribe((res: any) => {
        this.posts = res.items;
      });
      this.questionAnswerService.getQuestion(1, 3, undefined, undefined, event.target.value).subscribe((res: any) => {
        this.questions = res.items;
      });
      this.userService.getAllUsers(1, 3, undefined, undefined, event.target.value).subscribe((res: any) => {
        this.users = res.items;
      });
      this.isShowSearch = true;
    } else {
      this.isShowSearch = false;
    }
  }

  isAdmin(): boolean {
    return this.localStorageHelperService.getRole();
  }
}
