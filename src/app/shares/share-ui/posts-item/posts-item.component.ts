import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
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
    private localStorageHelperService: LocalStorageHelperService,
    private postsService: PostsService,
    private notifyService: NotifyService
  ) {
    this.userLocal = this.localStorageHelperService.getUser();
  }
  ngOnChanges(changes: SimpleChanges): void {
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

  bookmarkPosts(posts: any): void {
    if (!this.userLocal.id) {
      this.notifyService.error('Please login to bookmark this posts!', 'Error');
      return;
    }
    this.postsService.bookmarkPosts(posts?.id, true).subscribe((res) => {
      posts.isBookmark = true;
      this.notifyService.success('Bookmark Success!', 'Success');
    }, (error) => {
      this.notifyService.error('Bookmark Failed!', 'Error');
    });
  }

  unBookmarkPosts(posts: any): void {
    if (!this.userLocal.id) {
      this.notifyService.error('Please login to un bookmark this posts!', 'Error');
      return;
    }
    this.postsService.bookmarkPosts(posts?.id, false).subscribe((res) => {
      posts.isBookmark = false;
      this.notifyService.success('Un bookmark Success!', 'Success');
    }, (error) => {
      this.notifyService.error('Un bookmark Failed!', 'Error');
    });
  }
}
