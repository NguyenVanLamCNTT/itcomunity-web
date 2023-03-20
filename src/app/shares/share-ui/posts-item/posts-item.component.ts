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
    // hljs.highlight(this.content, {language: 'javascript'});
    console.log('hljs.highlight(this.content)', hljs.highlight(this.content, {language: 'javascript'}))
    document.querySelectorAll('pre code').forEach((el) => {
      console.log('hljs.highlightElement(el)',el)
      hljs.highlightElement(el);
    });
  }
  ngAfterViewInit(): void {
    console.log('hljs.highlightElement(el)')
  }
}
