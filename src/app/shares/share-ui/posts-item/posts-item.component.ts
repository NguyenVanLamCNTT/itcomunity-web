import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostsItemComponent {
  @Input() tags: any;
  @Input() title: any;
  @Input() topics: any;
  @Input() postsForm: any;
  @Input() content: any;
}
