import { QuestionAnswerService } from './../../services/question-answers/question-answer.service';
import { LocalStorageHelperService } from './../../services/token-storage/localstorage-helper.service';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { CommentService } from './../../services/comment/comment.service';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentDetailComponent } from '../comment-detail/comment-detail.component';
import { User } from '../../models/user/user';
import { AuthService } from '../../services/auth/auth.service';
import { ConfirmModalComponent } from '../modal/confirm-modal/confirm-modal.component';
const hljs = require('highlight.js');

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentsComponent implements OnChanges, AfterViewInit{
  @Input() posts: any;
  @Input() series: any;
  @Input() question: any;
  @Input() answer: any;
  @Input() user: any;
  @Input() comment: any;

  readonly = false;
  contentRichText: string = '';
  placeholder = 'Write a comment...';
  listComments: any;
  isUpdate: boolean = false;

  page: number = 1;
  count: number = 0;
  itemsSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  commentSelected: any;

  localUser: User = this.LocalStorageHelperService.getUser();
  
  constructor(private commentService: CommentService,
              private notifyService: NotifyService,
              private modalService: NgbModal,
              private LocalStorageHelperService: LocalStorageHelperService,
              private authService: AuthService,
              private questionAnswerService: QuestionAnswerService
              ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.posts && this.series) {
      this.listenService(this.page, this.itemsSize, this.posts.id, this.series.id);
    } else if (this.series) {
      this.listenService(this.page, this.itemsSize, null, this.series.id);
    } else if (this.posts) {
      this.listenService(this.page, this.itemsSize, this.posts.id);
    } else if (this.question) {
      this.listenService(this.page, this.itemsSize, null, null, this.question.id);
    }

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

  listenService(page = 1, itemsSize = 5, postsId?: any, seriesId?: any, questionId?: any) {
    if (questionId) {
      this.questionAnswerService.getAnswer(questionId).subscribe(res => {
        this.listComments = res;
      });
      return;
    }
    this.commentService.getComments(page, itemsSize, postsId, seriesId).subscribe(res => {
      this.listComments = res;
      this.codeFormat();
    });
  }

  onchange(event: any) {
    this.contentRichText = event;
    this.contentRichText = this.contentRichText.replace(/<code/g, '<code class=\"hljs\"');
  }

  onSubmit() {
    if (!this.authService.checkLogin()) {
      this.notifyService.error('Please login to comment', 'Error');
      return;
    }
    const data = {
      content: this.contentRichText,
      answerId: this.answer ? this.answer.id : null,
      postId: this.posts ? this.posts.id : null,
      seriesId: this.series ? this.series.id : null,
      parentCommentId: this.comment ? this.comment.id : null,
    }
    if (this.posts) {
      if (this.isUpdate) {
        this.commentService.updateComment(this.commentSelected.id, data).subscribe(res => {
          this.notifyService.success('Comment successfully', 'Success');
          this.contentRichText = '';
          this.isUpdate = false;
          this.listenService(1, 10, this.posts.id);
          this.isUpdate = false;
        });
        return;
      }
      this.commentService.createComment(data).subscribe(res => {
        this.notifyService.success('Comment successfully', 'Success');
        this.contentRichText = '';
        this.listenService(1, 10, this.posts.id);
      },
      err => {
        this.notifyService.error('Comment failed', 'Error');
      })
    }
    if (this.series) {
      if (this.isUpdate) {
        this.commentService.updateComment(this.commentSelected.id, data).subscribe(res => {
          this.notifyService.success('Comment successfully', 'Success');
          this.contentRichText = '';
          this.isUpdate = false;
          this.listenService(1, 10, null, this.series.id);
          this.isUpdate = false;
        });
        return;
      }
      this.commentService.createComment(data).subscribe(res => {
        this.notifyService.success('Comment successfully', 'Success');
        this.contentRichText = '';
        this.listenService(1, 10, null, this.series.id);
      },
      err => {
        this.notifyService.error('Comment failed', 'Error');
      })
    }

    if (this.question) {
      const dataAnswer = {
        content: this.contentRichText,
        questionId: this.question.id
      }
      if (this.isUpdate) {
        this.questionAnswerService.updateAnswer(this.commentSelected.id, dataAnswer).subscribe(res => {
          this.notifyService.success('Comment successfully', 'Success');
          this.contentRichText = '';
          this.isUpdate = false;
          this.listenService(1, 10, null, null, this.question.id);
          this.isUpdate = false;
        });
        return;
      }
      this.questionAnswerService.createAnswer(dataAnswer).subscribe(res => {
        this.notifyService.success('Comment successfully', 'Success');
        this.contentRichText = '';
        this.listenService(1, 10, null, null, this.question.id);
      },
      err => {
        this.notifyService.error('Comment failed', 'Error');
      })
    }
  }
  
  onTableDataChange(event: any) {
    this.page = event;
    if (this.posts) {
      this.listenService(this.page, this.itemsSize, this.posts.id);
    } else if (this.series) {
      this.listenService(this.page, this.itemsSize, null, this.series.id);
    }
  }

  isPermission(comment: any) {
    console.log(comment);
    if (this.authService.checkLogin()) {
      if (this.localUser.id === comment?.author?.id) {
        return true;
      }
    }
    return false;
  }

  openModalCommentDetail(comment: any) {
    const modalRef = this.modalService.open(CommentDetailComponent, { size: 'lg' });
    modalRef.componentInstance.posts = this.posts;
    modalRef.componentInstance.series = this.series;
    modalRef.componentInstance.comment = comment;
    modalRef.componentInstance.answer = this.answer;
    modalRef.componentInstance.localUser = this.localUser;

    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {}).catch((err) => {
      console.log(err);
    });
  }

  approve(comment: any): void {
    if (!comment) {
      return;
    }

    this.questionAnswerService.approvedAnswer(comment.id, true).subscribe(res => {
      this.notifyService.success('Approved successfully!', 'Success');
      this.listenService(1, 10, null, null, this.question.id);
    }, 
    err => {
      this.notifyService.error('Approved failed!', 'Error');
    });
  }

  updateComment(comment: any): void {
    console.log(comment);
    this.contentRichText = comment.content;
    this.isUpdate = true;
    this.commentSelected = comment;
  }

  deleteComment(comment: any): void {
    if (!comment) {
      return;
    }

    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.action = 'delete';
    modalRef.componentInstance.title = 'Delete This Series';
    modalRef.componentInstance.content = 'Are you sure you want to delete this series?';
    modalRef.result.then((result) => {
      if (this.posts) {
        this.commentService.deleteComment(comment.id).subscribe(res => {
          this.notifyService.success('Deleted successfully!', 'Success');
          this.listenService(1, 10, this.posts.id);
        }, 
        err => {
          this.notifyService.error('Deleted failed!', 'Error');
        });
      }
  
      if (this.series) {
        this.commentService.deleteComment(comment.id).subscribe(res => {
          this.notifyService.success('Deleted successfully!', 'Success');
          this.listenService(1, 10, null, this.series.id);
        }, 
        err => {
          this.notifyService.error('Deleted failed!', 'Error');
        });
      }
  
      if (this.question) {
        this.questionAnswerService.deleteAnswer(comment.id).subscribe(res => {
          this.notifyService.success('Deleted successfully!', 'Success');
          this.listenService(1, 10, null, null, this.question.id);
        }, 
        err => {
          this.notifyService.error('Deleted failed!', 'Error');
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}
