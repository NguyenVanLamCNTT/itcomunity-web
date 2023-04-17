import { NotifyService } from './../../shares/services/notify/notify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shares/services/user/user.service';
import { LocalStorageHelperService } from './../../shares/services/token-storage/localstorage-helper.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shares/models/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user: User | undefined;
  username: any;
  isFollowing: boolean | undefined = false;
  currentUser = this.localStorageHelperService.getUser();
  constructor(private userService: UserService,
    private router: Router,
    private notifyService: NotifyService,
    private localStorageHelperService: LocalStorageHelperService) { }

  menuItems = [
    {
      name: 'Posts',
      link: `/profile/${this.router.url.split('/')[2]}/posts`,
      id: 'posts',
      active: false
    },
    {
      name: 'Series',
      link: `/profile/${this.router.url.split('/')[2]}/series`,
      id: 'series',
      active: false
    },
    {
      name: 'Questions',
      link: `/profile/${this.router.url.split('/')[2]}/questions`,
      id: 'questions',
      active: false
    },
    // {
    //   name: 'Followers',
    //   link: `/profile/${this.router.url.split('/')[2]}/followers`,
    //   id: 'followers',
    //   active: false
    // },
    // {
    //   name: 'Following',
    //   link: `/profile/${this.router.url.split('/')[2]}/following`,
    //   id: 'following',
    //   active: false
    // },
    // {
    //   name: 'Bookmarks',
    //   link: `/profile/${this.router.url.split('/')[2]}/bookmarks`,
    //   id: 'bookmarks',
    //   active: false
    // }
  ]
  ngOnInit(): void {
    this.listenService();
    this.activeClass();
  }
  activeClass() {
    const id = this.router.url.split('/')[3];
    if (id === undefined) {
      this.menuItems[0].active = true;
      this.router.navigate([this.menuItems[0].link]);
      return;
    }
    this.menuItems.forEach((menuItem: any) => {
      if (menuItem.id === id) {
        menuItem.active = true;
      }
    });
  }

  itemSelected(item: any) {
    this.menuItems.forEach((menuItem: any) => {
      menuItem.active = false;
    });
    item.active = true;
  }

  listenService(): void {
    this.username = this.router.url.split('/')[2];
    this.userService.getByUsername(this.username).subscribe((user: any) => {
      this.user = user;
      console.log('this.user', this.user);
      this.isFollowing = this.user?.followerIds?.some((follower: any) => follower === this.currentUser?.id);
    }, (error: any) => {
      this.router.navigate(['/404']);
    });
  }

  followingMember(user: any): void {
    this.userService.followingMember(user.id, true).subscribe((res: any) => {
      this.isFollowing = true;
      this.notifyService.success(`Following ${user?.fullName} successfully!`, 'Success');
    },
    (error: any) => {
      this.notifyService.error('Following fails!', 'Error');
    });
  }

  unfollowingMember(user: any): void {
    this.userService.followingMember(user.id, false).subscribe((res: any) => {
      this.isFollowing = false;
      this.notifyService.success(`Unfollowing ${user?.fullName} successfully!`, 'Success');
    },
    (error: any) => {
      this.notifyService.error('Unfollowing fails!', 'Error');
    });
  }
}
