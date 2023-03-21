import { PostsService } from './../../shares/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss']
})
export class NewestComponent implements OnInit{
  listPosts: any;
  constructor(private postsService: PostsService) {

  }

  ngOnInit() {
    this.listenService();
  }

  listenService() {
    this.postsService.getPosts().subscribe(res => {
      this.listPosts = res;
      console.log(this.listPosts);
    })
  }
}
