import { SeriesService } from 'src/app/shares/services/series/series.service';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newest-my-bookmark',
  templateUrl: './newest-my-bookmark.component.html',
  styleUrls: ['./newest-my-bookmark.component.scss']
})
export class NewestMyBookmarkComponent implements OnInit {
  isShow: boolean = true;
  constructor(private postsService: PostsService,
              private seriesService: SeriesService) { }
  ngOnInit(): void {

  }

  selectType(event: any): void {
    if (event.target.value === 'posts') {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
}
