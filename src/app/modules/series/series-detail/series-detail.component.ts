import { Posts } from 'src/app/shares/models/posts/posts';
import { SeriesService } from './../../../shares/services/series/series.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shares/services/posts/posts.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit {
  seriesId: any;
  series: any;
  listPosts: any;
  constructor(private postsService: PostsService,
    private seriesService: SeriesService,
    private activatedRoute: ActivatedRoute) {

    }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.seriesId = res?.id;
    });
    this.listenService();
  }

  listenService(): void {
    this.seriesService.getSeriesById(this.seriesId).subscribe((series: any) => {
      this.series = series;
    });
    this.postsService.getPostsBySeries(this.seriesId).subscribe((posts: any) => {
      this.listPosts = posts;
    });
  }
}
