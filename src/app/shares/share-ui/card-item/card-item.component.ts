import { Component, Input } from '@angular/core';
import { Posts } from '../../models/posts/posts';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() item: Posts | undefined;
  @Input() isSeries: boolean | undefined;
  @Input() isRelated: boolean | undefined;
  constructor() {}

}
