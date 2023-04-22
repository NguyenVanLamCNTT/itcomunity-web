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

  posts: any;
  series: any;
  questions: any;

  constructor(private authService: AuthService,
    private router: Router,
    private localStorageHelperService: LocalStorageHelperService,
    private postsService: PostsService) { }
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

  onFilterChange(event: any): void {
    console.log('event', event.target.value);
    const value = event.target.value;
    if (value || value !== '') {
      this.isShowSearch = true;
      this.postsService.getPosts(1, 3, undefined, undefined, event.target.value).subscribe((res: any) => {
        this.posts = res.items;
      });
    } else {
      this.isShowSearch = false;
    }
  }
}
