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
  constructor(private localStorageHelperService: LocalStorageHelperService) { }
  ngOnInit(): void {
    this.listenService();
  }
  listenService(): void {
    this.user = this.localStorageHelperService.getUser();
  }

}
