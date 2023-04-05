import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLogin: boolean = false;
  dataMenu = [
    {
      id: 1,
      name: 'CONTENT_CREATOR',
      link: '/content-creator',
      isShow: true,
      isActive: false,
    },
    {
      id: 2,
      name: 'NEWEST',
      link: '/home/newest/posts',
      isShow: true,
      isActive: true,
    },
    {
      id: 3,
      name: 'FOLLOWINGS',
      link: '/home/newest/followings',
      isShow: false,
      isActive: false,
    },
    {
      id: 4,
      name: 'QUESTIONS',
      link: '/home/newest/followings',
      isShow: true,
      isActive: false,
    },
    {
      id: 5,
      name: 'SERIES',
      link: '/home/newest/series',
      isShow: true,
      isActive: false,
    },
    {
      id: 6,
      name: 'TRENDING',
      link: '/trending',
      isShow: true,
      isActive: false,
    },
    {
      id: 7,
      name: 'MY_BOOKMARKS',
      link: '/saved',
      isShow: false,
      isActive: false,
    }
  ]
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLogin = this.authService.checkLogin();
  }

  selectItem(item: any) {
    this.dataMenu.forEach(element => {
      if (element.id == item.id) {
        element.isActive = true;
      } else {
        element.isActive = false;
      }
    });
  }
}
