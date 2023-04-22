import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Posts } from '../../models/posts/posts';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnChanges{
  @Input() item: Posts | undefined;
  @Input() isSeries: boolean | undefined;
  @Input() isRelated: boolean | undefined;
  @Input() isTrending: boolean | undefined;
  @Input() number: any | undefined;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getUrl(this.number);
  }

  getUrl(number: number): string {
    if (number == 0) {
      return '../../../../assets/images/top-one.png';
    } else if (number == 1) {
      return '../../../../assets/images/top-two.png';
    } else if (number == 2) {
      return '../../../../assets/images/top-three.png';
    }
    return '';
  }
}
