import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { Posts } from 'src/app/shares/models/posts/posts';
import { SeriesService } from './../../../shares/services/series/series.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { LocalStorageHelperService } from 'src/app/shares/services/token-storage/localstorage-helper.service';

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
    private localStorageHelperService: LocalStorageHelperService) {

    }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.seriesId = res?.id;
    });
    this.listenService();
    this.userLocal = this.localStorageHelperService.getUser();
  }

  listenService(): void {
    this.seriesService.getSeriesById(this.seriesId).subscribe((series: any) => {
      this.series = series;
    });
    this.postsService.getPostsBySeries(this.seriesId).subscribe((posts: any) => {
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
}
