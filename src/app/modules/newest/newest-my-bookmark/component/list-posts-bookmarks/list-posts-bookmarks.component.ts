import { Component } from '@angular/core';
import { PostsService } from 'src/app/shares/services/posts/posts.service';

@Component({
  selector: 'app-list-posts-bookmarks',
  templateUrl: './list-posts-bookmarks.component.html',
  styleUrls: ['./list-posts-bookmarks.component.scss']
})
export class ListPostsBookmarksComponent {
  listPosts: any;

  page: number = 1;
  count: number = 0;
  itemsSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private postsService: PostsService) { }
  ngOnInit(): void {
    this.listenService();
  }

  listenService(page?: any, itemsSize?: any, sort?: any) {
    this.postsService.getPostsByBookmark(page, itemsSize).subscribe((res) => {
      this.listPosts = res;
    });
  }
  

  onTableDataChange(event: any) {
    this.page = event;
    this.listenService(this.page, this.itemsSize);
  }
}
