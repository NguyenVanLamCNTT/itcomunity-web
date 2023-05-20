import { TopicService } from './../../../shares/services/topic/topic.service';
import { User } from './../../../shares/models/user/user';
import { LocalStorageHelperService } from './../../../shares/services/token-storage/localstorage-helper.service';
import { UserService } from './../../../shares/services/user/user.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { UploadFileService } from 'src/app/shares/services/uploadFile/upload-file.service';
import { Posts } from 'src/app/shares/models/posts/posts';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
const hljs = require('highlight.js');
export interface Tag {
  name: string;
}
@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
})
export class CreatePostsComponent implements OnInit {
  @HostListener('dragover', ['$event']) dragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }
  // Dragleave Event
  @HostListener('dragleave', ['$event']) public dragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }
  // Drop Event
  @HostListener('drop', ['$event']) public drop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.detectFileThumbnail(event);
  }
  
  public contentRichText: string = ""
  public readonly: boolean = true;
  listTopic: any;
  postsForm: any;
  formOptionPosts: any;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [];
  urlThumbnail: any = [];
  filesThumbnail: any;
  content: any;
  user: User | undefined;
  isUpdate: boolean = false;
  postsId: any;
  topicSelected: any;
  postsOld: Posts | undefined;

  placeholder = `Markdown syntax is supported. Click ? for Help \n
      To next line, using HTML <br> tag or Enter Twice \n
      Click “Next” 👁️ to preview mode \n
      Click icon “Code” 💻 to embed code your posts \n
      CLick icon “Image” 📷 to upload image \n
      Please hover to any icon for show tooltip. Give me any feedback if any. \n`

  constructor(private postsService: PostsService,
    private uploadFileService: UploadFileService,
    private router: Router,
    private localStorageHelperService: LocalStorageHelperService,
    private topicService: TopicService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initPostsForm();
    this.getMe();
    this.listenService();
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.postsId = params.id;
        this.isUpdate = true;
        this.postsService.getPostsById(params.id).subscribe((res: any) => {
          this.postsOld = res;
          this.postsForm.controls.title.setValue(res.name);
          this.postsForm.controls.topics.setValue(res.topics);
          this.contentRichText = res.content;
          // this.urlThumbnail = res.imageThumbnail;
          this.tags = res.keywords.map((item: any) => {
            return { name: item };
          });
          this.formOptionPosts.controls.status.setValue(res.status);
        });
      }
    });
  }
  
  listenService() {
    this.topicService.getTopic(1, 100).subscribe((res: any) => {
      this.listTopic = res;
    });
  }

  getMe(): void {
    this.user = this.localStorageHelperService.getUser();
  }

  initPostsForm(): void {
    this.postsForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      topics: new FormControl('', [Validators.required]),
    });
    this.formOptionPosts = new FormGroup({
      status: new FormControl('publish', [Validators.required]),
    });
  }

  onchange(eventData: any) {
    this.contentRichText = eventData;
    this.contentRichText = this.contentRichText.replace(/<code/g, '<code class=\"hljs\"');
  }

  isControlValid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(formGroup: FormGroup, validation: any, controlName: any): boolean {
    const control = formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(formGroup: FormGroup, controlName: any): boolean {
    const control = formGroup.controls[controlName];
    return control.dirty || control.touched;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push({ name: value });
    }

    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: Tag, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(tag);
      return;
    }

    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index].name = value;
    }
  }

  detectFileThumbnail(event: any): void {
    this.urlThumbnail.splice(event);
    this.filesThumbnail = event.target.files || event.dataTransfer.files;
    if (this.filesThumbnail.length < 7) {
      for (let file of this.filesThumbnail) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urlThumbnail.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  removeUrlThumbnail(): void {
    this.urlThumbnail = [];
  }

  next(): void {
    this.content = this.contentRichText;
  }

  submit(): void {
    const keywords = this.tags.map((tag: any) => tag.name);
    const data: Posts = {
      name: this.postsForm.value.title,
      topics: [this.postsForm.value.topics],
      content: this.content,
      keywords: keywords, 
      status: this.formOptionPosts.value.status,
      imageUrl: ''
    };
    if (this.filesThumbnail && this.filesThumbnail[0]) {
      const fd = new FormData();
      fd.append('upload', this.filesThumbnail[0]);
      this.uploadFileService.uploadFile(fd).pipe(
        switchMap(res => {
          data.imageUrl = res.fileName;
          return this.postsService.createPosts(data);
        })
      ).subscribe((res: any) => {
        this.router.navigate(['/home/newest/posts']);
      });
      return;
    } else if (this.isUpdate && this.postsOld?.imageThumbnail) {
      data.imageUrl = this.postsOld.imageThumbnail;
    }
    if (this.isUpdate) {
      this.postsService.updatePosts(this.postsId, data).subscribe((res: any) => {
        this.router.navigate(['/home/newest/posts']);
      });
      return;
    }
    this.postsService.createPosts(data).subscribe((res: any) => {
      this.router.navigate(['/home/newest/posts']);
    });
  }
}