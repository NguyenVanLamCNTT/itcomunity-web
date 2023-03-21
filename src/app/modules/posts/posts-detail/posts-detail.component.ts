import { Posts } from 'src/app/shares/models/posts/posts';
import { PostsService } from './../../../shares/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {
  postsId: number = 0;
  posts: Posts | undefined;
  constructor(private postsService: PostsService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.postsId = res?.id;
    });
    this.listenService();
  }

  listenService(): void {
    this.postsService.getPostsById(this.postsId).subscribe(posts => {
      this.posts = posts;
      console.log('this.posts', this.posts);
    })
  }
}
