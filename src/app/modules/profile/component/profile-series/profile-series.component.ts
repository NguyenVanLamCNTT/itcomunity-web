import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { SeriesService } from 'src/app/shares/services/series/series.service';
import { LoadingServiceService } from 'src/app/shares/services/loading/loading-service.service';

@Component({
  selector: 'app-profile-series',
  templateUrl: './profile-series.component.html',
  styleUrls: ['./profile-series.component.scss']
})
export class ProfileSeriesComponent {
  username: string | undefined;
  listSeries: any;
  page: number = 1;
  count: number = 0;
  itemsSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor (private seriesService: SeriesService,
              private activatedRoute: ActivatedRoute,
              private loadingServiceService: LoadingServiceService) {
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.username = params.username;
    });
    this.listenService();
  }

  listenService(page = 1, itemsSize = 10, sort = 'desc'): void {
    this.loadingServiceService.showLoading();
    this.seriesService.getSeries(page, itemsSize, sort, this.username).subscribe((series: any) => {
      this.listSeries = series;
      this.loadingServiceService.hideLoading();
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenService(this.page, this.itemsSize);
  }
}
