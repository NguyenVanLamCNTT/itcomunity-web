import { PostsService } from './../../shares/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss']
})
export class NewestComponent implements OnInit{
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
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenService(this.page, this.itemsSize);
  }
}
