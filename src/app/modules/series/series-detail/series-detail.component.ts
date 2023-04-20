import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { SeriesService } from './../../../shares/services/series/series.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { LocalStorageHelperService } from 'src/app/shares/services/token-storage/localstorage-helper.service';
import { LoadingServiceService } from 'src/app/shares/services/loading/loading-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shares/share-ui/modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit {
  seriesId: any;
  series: any;
  listPosts: any;
  userLocal: any;
  constructor(private postsService: PostsService,
    private seriesService: SeriesService,
    private activatedRoute: ActivatedRoute,
    private notifyService: NotifyService,
    private localStorageHelperService: LocalStorageHelperService,
    private loadingServiceService: LoadingServiceService,
    private modalService: NgbModal) {

    }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.seriesId = res?.id;
    });
    this.listenService();
    this.userLocal = this.localStorageHelperService.getUser();
  }

  listenService(): void {
    this.loadingServiceService.showLoading();
    this.seriesService.getSeriesById(this.seriesId).subscribe((series: any) => {
      this.loadingServiceService.hideLoading();
      this.series = series;
    });
    this.postsService.getPostsBySeries(this.seriesId).subscribe((posts: any) => {
      this.loadingServiceService.hideLoading();
      this.listPosts = posts;
    });
  }

  isPermission(): boolean {
    if (this.userLocal?.id === this.series?.author?.id) {
      return true;
    }
    return false;
  }

  bookmarkSeries(series: any): void {
    if (!this.userLocal.id) {
      this.notifyService.error('Please login to bookmark this series!', 'Error');
      return;
    }
    this.seriesService.bookmarkSeries(series?.id, true).subscribe((res) => {
      this.notifyService.success('Add bookmark series successfully!', 'Success');
    }, (err) => {
      this.notifyService.error('Add bookmark series failed!', 'Error');
    });
  }

  unBookmarkSeries(series: any): void {
    if (!this.userLocal.id) {
      this.notifyService.error('Please login to bookmark this series!', 'Error');
      return;
    }
    this.seriesService.bookmarkSeries(series?.id, false).subscribe((res) => {
      this.notifyService.success('Remove bookmark series successfully!', 'Success');
    }, (err) => {
      this.notifyService.error('Remove bookmark series failed!', 'Error');
    });
  }

  deleteSeries(series: any): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.action = 'delete';
    modalRef.componentInstance.title = 'Delete This Series';
    modalRef.componentInstance.content = 'Are you sure you want to delete this series?';
    modalRef.result.then((result) => {
      this.notifyService.success('Delete series successfully!', 'Success');
      // this.seriesService.deleteSeries(series?.id).subscribe((res) => {}, (err) => {});
      history.back()
    }).catch((error) => {
      console.log(error);
    });
  }
}
