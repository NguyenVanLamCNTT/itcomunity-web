import { PostsService } from './../../shares/services/posts/posts.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MyUploadAdapter } from './uploadAdapter';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
const hljs = require('highlight.js');
export interface Tag {
  name: string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public contentRichText: string = ""
  public readonly: boolean = true;
  postsForm: any;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [];
  urlThumbnail: any = [];
  filesThumbnail: any;
  content: any;
  postsMode: any = 'publish';

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.initPostsForm();
  }

  initPostsForm(): void {
    this.postsForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      topics: new FormControl('', [Validators.required]),
    });
  }

  onchange(eventData: any) {
    this.contentRichText = eventData;
    this.contentRichText = this.contentRichText.replace(/<code/g, '<code class=\"hljs\"');
    document.querySelectorAll('pre code').forEach((el) => {
      console.log('hljs.highlightElement(el)', el)
      hljs.highlightElement(el);
    });
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
    document.querySelectorAll('pre code').forEach((el) => {
      console.log('hljs.highlightElement(el)', el)
      hljs.highlightElement(el);
    });
  }
  submit(): void {
    // console.log(this.postsForm.value);
    const keywords = this.tags.map((tag: any) => tag.name);
    const data = {
      name: this.postsForm.value.title,
      topics: [1],
      content: this.content,
      keywords: keywords,
      thumbnail: this.urlThumbnail,
      status: this.postsMode,
      imageUrl: ''
    };
    console.log(data);
    this.postsService.createPosts(data).subscribe((res: any) => {
      console.log(res);
    });
  }
}