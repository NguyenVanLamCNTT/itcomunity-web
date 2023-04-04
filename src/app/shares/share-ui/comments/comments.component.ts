import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  readonly = false;
  contentRichText: string = '';

  placeholder = 'Write a comment...';

  constructor() { }

  onchange(event: any) {

  }
}
