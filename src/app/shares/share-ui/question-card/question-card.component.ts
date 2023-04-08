import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input() question: any;
  constructor() { }

  parseObject(tag: string): string {
    return JSON.parse(tag).name;
  }
}
