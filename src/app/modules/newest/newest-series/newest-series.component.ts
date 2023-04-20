import { AuthService } from './../../../shares/services/auth/auth.service';
import { SeriesService } from './../../../shares/services/series/series.service';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { LoadingServiceService } from 'src/app/shares/services/loading/loading-service.service';

@Component({
  selector: 'app-newest-series',
  templateUrl: './newest-series.component.html',
  styleUrls: ['./newest-series.component.scss']
})
export class NewestSeriesComponent implements OnInit{
  isLogin: boolean = false;
  listSeries: any;
  page: number = 1;
  count: number = 0;
  itemsSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor (private postsService: PostsService,
              private seriesService: SeriesService,
              private authService: AuthService,
              private loadingServiceService: LoadingServiceService) {
    
  }
  ngOnInit(): void {
    this.isLogin = this.authService.checkLogin();
    this.listenService();
  }

  listenService(page = 1, itemsSize = 10, sort = 'desc'): void {
    this.loadingServiceService.showLoading();
    this.seriesService.getSeries(page, itemsSize, sort).subscribe((series: any) => {
      this.listSeries = series;
      this.loadingServiceService.hideLoading();
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenService(this.page, this.itemsSize);
  }
}
