import { HighlightJsDirective } from 'ngx-highlight-js';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
const hljs = require('highlight.js');
@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostsItemComponent implements AfterViewInit, OnChanges{
  @Input() tags: any;
  @Input() title: any;
  @Input() topics: any;
  @Input() postsForm: any;
  @Input() content: any;

  constructor(private _renderer: Renderer2, private cd: HighlightJsDirective) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
      });
    }, 1000);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    setTimeout(() => {
      document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
      });
    }, 1000);
  }
}
