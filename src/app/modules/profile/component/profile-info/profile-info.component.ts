import { UserService } from 'src/app/shares/services/user/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageHelperService } from './../../../../shares/services/token-storage/localstorage-helper.service';
import { User } from './../../../../shares/models/user/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit{

  constructor(private localStorageHelperService: LocalStorageHelperService,
              private userService: UserService) { }

  ngOnInit(): void {
  }
}
