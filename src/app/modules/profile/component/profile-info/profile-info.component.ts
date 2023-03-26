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
  user: User| undefined;
  userForm: FormGroup = this.initForm();
  urlProfile: any = [];
  fileProfile: any;
  isUpload: boolean = false;

  constructor(private localStorageHelperService: LocalStorageHelperService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.listenService();
  }
  initForm(): FormGroup {
    return new FormGroup({
      fullname: new FormControl({value: '', disabled: false}, [Validators.required]),
      email: new FormControl({value: '', disabled: true}, [Validators.required]),
      gender: new FormControl({value: '', disabled: true}, [Validators.required]),
      username: new FormControl({value: '', disabled: true}, [Validators.required]),
      age: new FormControl({value: '', disabled: true}, [Validators.required]),
      about: new FormControl({value: '', disabled: false}, [Validators.required]),
    });
  }

  listenService(): void {
    this.user = this.localStorageHelperService.getUser();
    console.log('user', this.user);
    this.user && this.pathValue(this.user);
  }

  pathValue(user: User): void {
    this.urlProfile = user.avatar;
    this.userForm.patchValue({
      fullname: user.fullName,
      email: user.email,
      gender: user.gender,
      username: user.username,
      age: user.age,
      about: user.about
    });
  }

  detectFileThumbnail(event: any): void {
    // this.urlProfile.splice(event);
    this.fileProfile = event.target.files || event.dataTransfer.files;
    if (this.fileProfile.length < 7) {
      for (let file of this.fileProfile) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urlProfile = e.target.result;
          this.isUpload = true;
        }
        reader.readAsDataURL(file);
      }
    }
  }
  removeUrlThumbnail(): void {
    this.urlProfile = this.user?.avatar;
    this.isUpload = false;
  }

  submit(): void {
    const userUpdate = new User();
    userUpdate.fullName = this.userForm.value.fullname;
    userUpdate.about = this.userForm.value.about;
    userUpdate.avatar = this.urlProfile;
    userUpdate.age = this.userForm.value.age;
    this.userService.updateMe(userUpdate).subscribe((res: any) => {
      console.log('res', res);

    });
  }
}
