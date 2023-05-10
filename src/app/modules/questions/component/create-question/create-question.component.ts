import { NotifyService } from './../../../../shares/services/notify/notify.service';
import { QuestionAnswerService } from './../../../../shares/services/question-answers/question-answer.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit{
  questionId: any;
  questionForm: any;
  question: any;
  isUpdate: boolean = false;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [];

  contentRichText: string = ""
  readonly: boolean = true;

  placeholder = `Markdown syntax is supported. Click ? for Help \n
  To next line, using HTML <br> tag or Enter Twice \n
  Click “Next” 👁️ to preview mode \n
  Click icon “Code” 💻 to embed code your posts \n
  CLick icon “Image” 📷 to upload image \n
  Please hover to any icon for show tooltip. Give me any feedback if any. \n`

  constructor(private questionAnswerService: QuestionAnswerService,
              private notifyService: NotifyService,
              private activatedRoute: ActivatedRoute,) { }
  ngOnInit(): void {
    this.initPostsForm();
    this.activatedRoute.params.subscribe((params: any) => {
      this.questionId = params.id;
      if (this.questionId) {
        this.questionAnswerService.getQuestionsById(this.questionId).subscribe((question: any) => {
          this.question = question;
          console.log(question);
          this.questionForm.patchValue({
            title: question.title,
            status: question.status,
          });
          this.tags = question.keywords.map((keyword: any) => JSON.parse(keyword));
          this.contentRichText = question.content;
          this.isUpdate = true;
        });
      }
    });
  }

  initPostsForm(): void {
    this.questionForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      status: new FormControl(''),
    });

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

  onchange(eventData: any) {
    this.contentRichText = eventData;
    this.contentRichText = this.contentRichText.replace(/<code/g, '<code class=\"hljs\"');
  }

  submit() {
    const data = {
      title: this.questionForm.value.title,
      content: this.contentRichText,
      keywords: this.tags
    }
    console.log(data);

    if (this.isUpdate) {
      this.questionAnswerService.updateQuestion(this.questionId, data).subscribe(res => {
        this.clearData();
        this.notifyService.success('Update question successfully!', 'Success');
      },
      err => {
        this.notifyService.error('Update question failed!', 'Error');
      });
      return;
    }

    this.questionAnswerService.createQuestion(data).subscribe(res => {
      this.clearData();
      this.notifyService.success('Create question successfully!', 'Success');
    },
    err => {
      this.notifyService.error('Create question failed!', 'Error');
    });
  }
  
  clearData() {
    this.questionForm.reset();
    this.tags = [];
    this.contentRichText = "";
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
}
