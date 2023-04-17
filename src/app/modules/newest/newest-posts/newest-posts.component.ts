import { Component } from '@angular/core';
import { PostsService } from 'src/app/shares/services/posts/posts.service';

@Component({
  selector: 'app-newest-posts',
  templateUrl: './newest-posts.component.html',
  styleUrls: ['./newest-posts.component.scss']
})
export class NewestPostsComponent {
  listPosts: any;
  page: number = 1;
  count: number = 0;
  itemsSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private postsService: PostsService) {

  }

  ngOnInit() {
    this.listenService();
  }

  listenService(page = 1, itemsSize = 10, sort = 'desc') {
    this.postsService.getPosts(page, itemsSize, sort).subscribe(res => {
      this.listPosts = res;
      console.log(this.listPosts);
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenService(this.page, this.itemsSize);
  }
}
