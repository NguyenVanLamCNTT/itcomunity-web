import { UploadFileService } from './../../../shares/services/uploadFile/upload-file.service';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingServiceService } from 'src/app/shares/services/loading/loading-service.service';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { SeriesService } from 'src/app/shares/services/series/series.service';
import { TopicService } from 'src/app/shares/services/topic/topic.service';
import { ConfirmModalComponent } from 'src/app/shares/share-ui/modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-topics-manager',
  templateUrl: './topics-manager.component.html',
  styleUrls: ['./topics-manager.component.scss']
})
export class TopicsManagerComponent {
  displayedColumns: string[] = ['image', 'name', 'followersNumber', 'created', 'modified', 'action'];
  dataSource = new MatTableDataSource<any>();
  totalSeries: number = 0;
  topicsForm: any;
  imageTopic: any;

  constructor(private topicService: TopicService,
    private notifyService: NotifyService,
    private modalService: NgbModal,
    private loadingServiceService: LoadingServiceService,
    private uploadFileService: UploadFileService) { }

  ngOnInit(): void {
    this.listenService();
    this.initForm();
  }

  initForm(): void {
    this.topicsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    })
  }

  listenService(): void {
    this.loadingServiceService.showLoading();
    this.topicService.getTopic(1, 1000).subscribe((res: any) => {
      this.totalSeries = res.totalItems;
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
    modalRef.componentInstance.title = 'Delete This Series';
    modalRef.componentInstance.content = 'Are you sure you want to delete this series?';
    modalRef.result.then((result) => {
      // this.seriesService.deleteSeries(posts.id).subscribe(res => {
      //   this.notifyService.success('Delete series successfully!', 'Success');
      //   this.listenService();
      // }, err => {
      //   this.notifyService.error('Delete series failed!', 'Error');
      // })
      this.topicService.deleteTopic(posts.id).subscribe(res => {
        this.notifyService.success('Delete topic successfully!', 'Success');
        this.listenService();
      }, err => {
        this.notifyService.error('Delete topic failed!', 'Error');
      });
    }).catch((error) => {
      console.log(error);
    });
  }
  files: any

  uploadImage(event: any): void {
    this.files = event.target.files;
  }
  urlThumbnail: any = [];
  filesThumbnail: any;
  detectFileThumbnail(event: any): void {
    this.urlThumbnail.splice(event);
    this.filesThumbnail = event.target.files || event.dataTransfer.files;
    if (this.filesThumbnail.length < 7) {
      for (let file of this.filesThumbnail) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urlThumbnail.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  removeUrlThumbnail(): void {
    this.urlThumbnail = [];
    this.filesThumbnail = [];
  }

  createTopic(): void {
    if (this.filesThumbnail && this.filesThumbnail.length > 0) {
      const formData = new FormData();
      formData.append('upload', this.filesThumbnail[0]);
      this.uploadFileService.uploadFile(formData).subscribe(res => {
        if (res.fileName) {
          this.topicsForm.value.image = res.fileName;
          const data = {
            name: this.topicsForm.value.name,
            image: res.fileName
          }
          this.topicService.createTopic(data).subscribe(res => {
            this.notifyService.success('Create topic successfully!', 'Success');
            this.listenService();
          }, err => { });
        }
      }, err => { });
      return;
    }

    this.topicService.createTopic(this.topicsForm.getRawValue()).subscribe(res => {
      this.notifyService.success('Create topic successfully!', 'Success');
      this.listenService();
    }, err => { });
  }
}
