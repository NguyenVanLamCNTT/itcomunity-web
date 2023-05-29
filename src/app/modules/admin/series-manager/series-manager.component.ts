import { AuthService } from 'src/app/shares/services/auth/auth.service';
import { LoadingServiceService } from './../../../shares/services/loading/loading-service.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { SeriesService } from 'src/app/shares/services/series/series.service';
import { ConfirmModalComponent } from 'src/app/shares/share-ui/modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-series-manager',
  templateUrl: './series-manager.component.html',
  styleUrls: ['./series-manager.component.scss']
})
export class SeriesManagerComponent {
  displayedColumns: string[] = ['author', 'name', 'status', 'created', 'modified', 'action'];
  dataSource = new MatTableDataSource<any>();
  totalSeries: number = 0;
  isDelete: boolean = false;

  constructor(private seriesService: SeriesService,
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
    this.seriesService.getSeries(1, 1000).subscribe((res: any) => {
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
      this.seriesService.deleteSeries(posts.id).subscribe(res => {
        this.notifyService.success('Delete series successfully!', 'Success');
        this.listenService();
      }, err => {
        this.notifyService.error('Delete series failed!', 'Error');
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  getDeleteSeries(): void {
    this.isDelete = true;
    this.loadingServiceService.showLoading();
    this.seriesService.getSeries(1, 1000, '', '', this.isDelete).subscribe((res: any) => {
      this.totalSeries = res.totalItems;
      this.dataSource.data = res.items;
      this.loadingServiceService.hideLoading();
    });
  }

  revertSeries(series: any): void {
    this.authService.revertDelete(0, 0, 0, 0, series.id).subscribe(res => {
      this.notifyService.success('Revert series successfully!', 'Success');
      this.getDeleteSeries();
      this.listenService();
    });
  }
}
