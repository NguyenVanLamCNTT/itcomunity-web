import { LocalStorageHelperService } from './../../services/token-storage/localstorage-helper.service';
import { ConfirmModalComponent } from './../modal/confirm-modal/confirm-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
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
  @Input() user: any;
  @Input() posts: any;
  @Output() idDeletePosts = new EventEmitter<any>();

  userLocal: any;
  constructor(
    private modalService: NgbModal,
    private localStorageHelperService: LocalStorageHelperService
  ) {
    this.userLocal = this.localStorageHelperService.getUser();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.user);
    console.log(this.posts);
    this.codeFormat();
  }
  ngAfterViewInit(): void {
    this.codeFormat();
  }

  codeFormat() {
    setTimeout(() => {
      document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
      });
    }, 1000);
  }

  deletePosts(id: any): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.action = 'delete';
    modalRef.componentInstance.title = 'Delete This Posts';
    modalRef.componentInstance.content = 'Are you sure you want to delete this posts?';
    modalRef.result.then((result) => {
      result && this.idDeletePosts.emit(id);
    }).catch((error) => {
      console.log(error);
    });
  }

  isPermission(): boolean {
    if (this.userLocal?.id === this.posts?.author?.id) {
      return true;
    }
    return false;
  }
}
