import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit, OnChanges{
  @Input() posts: any;
  @Input() series: any;
  @Input() question: any;
  @Input() answer: any;
  @Input() localUser: any;
  @Input() comment: any;

  readonly = false;
  contentRichText: string = '';
  placeholder = 'Write a comment...';
  listComments: any;

  page: number = 1;
  count: number = 0;
  itemsSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private commentService: CommentService,
    private notifyService: NotifyService,) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {}

  onchange(event: any) {
    this.contentRichText = event;
    this.contentRichText = this.contentRichText.replace(/<code/g, '<code class=\"hljs\"');
  }

  onSubmit() {
    const data: any = {
      content: this.contentRichText,
      // answerId: this.answer ? this.answer.id : null,
      // postId: this.posts ? this.posts.id : null,
      // seriesId: this.series ? this.series.id : null,
      parentCommentId: this.comment ? this.comment.id : null,
    };

    this.commentService.createComment(data).subscribe(res => {
      this.notifyService.success('Comment successfully!', 'Success');
      data.author = this.localUser;
      this.comment.childComment.push(data);
      this.contentRichText = '';
    },
      err => {
        this.notifyService.error('Comment fail!', 'Error');
      });
  }

  onTableDataChange(event: any) {
    // this.page = event;
    // if (this.posts) {
    //   this.listenService(this.page, this.itemsSize, this.posts.id);
    // } else if (this.series) {
    //   this.listenService(this.page, this.itemsSize, null, this.series.id);
    // }
  }
}
