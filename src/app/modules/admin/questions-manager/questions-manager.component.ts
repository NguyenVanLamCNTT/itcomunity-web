import { AuthService } from 'src/app/shares/services/auth/auth.service';
import { LoadingServiceService } from './../../../shares/services/loading/loading-service.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { QuestionAnswerService } from 'src/app/shares/services/question-answers/question-answer.service';
import { SeriesService } from 'src/app/shares/services/series/series.service';
import { ConfirmModalComponent } from 'src/app/shares/share-ui/modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-questions-manager',
  templateUrl: './questions-manager.component.html',
  styleUrls: ['./questions-manager.component.scss']
})
export class QuestionsManagerComponent {
  displayedColumns: string[] = ['author', 'title', 'answerNumber', 'created', 'modified', 'action'];
  dataSource = new MatTableDataSource<any>();
  totalQuestions: number = 0;
  isDelete: boolean = false;

  constructor(private questionAnswerService: QuestionAnswerService,
    private notifyService: NotifyService,
    private modalService: NgbModal,
    private loadingServiceService: LoadingServiceService,
    private authService: AuthService) { }
  ngOnInit(): void {
    this.listenService();
  }

  listenService(): void {
    this.isDelete = false;
    this.loadingServiceService.showLoading();
    this.questionAnswerService.getQuestion(1, 1000).subscribe((res: any) => {
      this.totalQuestions = res.totalItems;
      this.dataSource.data = res.items;
      this.loadingServiceService.hideLoading();
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deletePosts(posts: any): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.action = 'delete';
    modalRef.componentInstance.title = 'Delete This Question';
    modalRef.componentInstance.content = 'Are you sure you want to delete this question?';
    modalRef.result.then((result) => {
      this.questionAnswerService.deleteQuestion(posts.id).subscribe(res => {
        this.notifyService.success('Delete question successfully!', 'Success');
        this.listenService();
      }, err => {
        this.notifyService.error('Delete question failed!', 'Error');
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  getDeleteQuestions(): void {
    this.isDelete = true;
    this.questionAnswerService.getQuestion(1, 1000, '', '', '', true).subscribe((res: any) => {
      this.totalQuestions = res.totalItems;
      this.dataSource.data = res.items;
    });
  }

  restoreQuestion(question: any): void {
    this.authService.revertDelete(0, 0, question.id).subscribe(res => {
      this.notifyService.success('Restore question successfully!', 'Success');
      this.getDeleteQuestions();
      this.listenService();
    });
  }
}
