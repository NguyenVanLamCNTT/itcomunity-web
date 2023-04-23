import { QuestionAnswerService } from 'src/app/shares/services/question-answers/question-answer.service';
import { LocalStorageHelperService } from './../../../../shares/services/token-storage/localstorage-helper.service';
import { LoadingServiceService } from './../../../../shares/services/loading/loading-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shares/share-ui/modal/confirm-modal/confirm-modal.component';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit{
  questionId: any;
  question: any;
  userLocal = this.localStorageHelperService.getUser();
  constructor(private activatedRoute: ActivatedRoute,
    private questionAnswerService: QuestionAnswerService,
    private loadingServiceService: LoadingServiceService,
    private localStorageHelperService: LocalStorageHelperService,
    private modalService: NgbModal,
    private notifyService: NotifyService,
    private router: Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.questionId = res?.id;
    });
    this.listenService();
  }

  listenService(): void {
    this.loadingServiceService.showLoading();
    this.questionAnswerService.getQuestionsById(this.questionId).subscribe((question: any) => {
      this.question = question;
      this.loadingServiceService.hideLoading();
    });
  }

  parseObject(tag: string): string {
    return JSON.parse(tag).name;
  }

  isPermission(): boolean {
    if (this.userLocal?.id === this.question?.author?.id) {
      return true;
    }
    return false;
  }

  deletequestion(question: any): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.action = 'delete';
    modalRef.componentInstance.title = 'Delete This question';
    modalRef.componentInstance.content = 'Are you sure you want to delete this question?';
    modalRef.result.then((result) => {
      this.questionAnswerService.deleteQuestion(question?.id).subscribe((res) => {
        this.router.navigate(['/home/newest/questions']);
        this.notifyService.success('Delete question successfully!', 'Success');
      }, (err) => {
        console.log(err);
        this.notifyService.error('Delete question failed!', 'Error');
      });
      history.back()
    }).catch((error) => {
      console.log(error);
    });
  }
}
