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
  constructor(private userService: UserService,
    private router: Router) { }
  ngOnInit(): void {
    this.listenService();
  }
  listenService(): void {
    this.username = this.router.url.split('/')[2];
    this.userService.getByUsername(this.username).subscribe((user: any) => {
      this.user = user;
    });
  }

}
