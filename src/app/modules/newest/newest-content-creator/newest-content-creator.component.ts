import { Router } from '@angular/router';
import { AuthService } from 'src/app/shares/services/auth/auth.service';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { UserService } from 'src/app/shares/services/user/user.service';
import { TopicService } from './../../../shares/services/topic/topic.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, map } from 'rxjs';
import { LoadingServiceService } from 'src/app/shares/services/loading/loading-service.service';

@Component({
  selector: 'app-newest-content-creator',
  templateUrl: './newest-content-creator.component.html',
  styleUrls: ['./newest-content-creator.component.scss']
})
export class NewestContentCreatorComponent implements OnInit{
  topics: any;
  users:any;
  isLogin: boolean = false;

  //Topics page
  page: number = 1;
  count: number = 0;
  itemsSize: number = 18;
  tableSizes: any = [3, 6, 9, 12]; 
    
  constructor(private topicService: TopicService,
              private userService: UserService,
              private notifyService: NotifyService,
              private authService: AuthService,
              private router: Router,
              private loadingServiceService: LoadingServiceService) { }

  ngOnInit(): void {
    this.listenServiceTopic();
    this.listenServiceUsers();
    this.isLogin = this.authService.checkLogin();
  }
  listenServiceUsers(page = 1, itemsSize = 18, sort = 'desc') {
    this.loadingServiceService.showLoading();
    this.userService.getAllUsers(page, itemsSize).pipe(
      switchMap((res: any) => {
        if (res.items) {
          this.users = res;
        }
        return this.userService.getMe();
      })
    ).subscribe((res: any) => {
      if (res.authorFollow) {
        this.users.items = this.users.items.map((user: any) => {
          if (res.authorFollow?.includes(user.id)) {
            user.isFollowing = true;
          }
          return user;
        });
        this.users.items = this.users.items.filter((user: any) => user.id !== res.id);
        this.loadingServiceService.hideLoading();
      }
    });
  }

  listenServiceTopic(page = 1, itemsSize = 18, sort = 'desc') {
    this.loadingServiceService.showLoading();
    this.topicService.getTopic(page, itemsSize).pipe(
      switchMap((res: any) => {
        if (res.items) {
          this.topics = res;
        }
        return this.userService.getMe();
      })
    ).subscribe((res: any) => {
      this.topics.items = this.topics.items.map((topic: any) => {
        if (res.followTopicIds?.includes(topic.id)) {
          topic.isFollowing = true;
        }
        return topic;
      });
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
      this.topics.items = this.topics.items.map((item: any) => {
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
      this.topics.items = this.topics.items.map((item: any) => {
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

  followUser(user: any): void {
    if (!this.isLogin) {
      this.notifyService.error('Please login to follow user!', 'Error');
      this.router.navigate(['/auth/login']);
      return;
    }
    this.userService.followingMember(user.id, true).subscribe((res: any) => {
      this.users.items = this.users.items.map((item: any) => {
        if (item.id === user.id) {
          item.isFollowing = true;
          this.notifyService.success('Follow user successfully!', 'Success');
        }
        return item;
      });
    });
  }

  unFollowUser(user: any): void {
    this.userService.followingMember(user.id, false).subscribe((res: any) => {
      this.users.items = this.users.items.map((item: any) => {
        if (item.id === user.id) {
          item.isFollowing = false;
          this.notifyService.success('UnFollow user successfully!', 'Success');
        }
        return item;
      });
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenServiceTopic(this.page, this.itemsSize);
  }
}
