import { Component } from '@angular/core';
import { SeriesService } from 'src/app/shares/services/series/series.service';

@Component({
  selector: 'app-list-series-bookmarks',
  templateUrl: './list-series-bookmarks.component.html',
  styleUrls: ['./list-series-bookmarks.component.scss']
})
export class ListSeriesBookmarksComponent {
  listPosts: any;
  listSeries: any;

  page: number = 1;
  count: number = 0;
  itemsSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private seriesService: SeriesService) { }
  ngOnInit(): void {
    this.listenServiceSeries();
  }
  
  listenServiceSeries(page?: any, itemsSize?: any, sort?: any) {
    this.seriesService.getBookmarkSeries(page, itemsSize).subscribe((res) => {
      this.listSeries = res;
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenServiceSeries(this.page, this.itemsSize);
  }
}
