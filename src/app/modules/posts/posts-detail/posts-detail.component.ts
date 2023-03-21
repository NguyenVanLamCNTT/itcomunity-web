import { Posts } from 'src/app/shares/models/posts/posts';
import { PostsService } from './../../../shares/services/posts/posts.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit, AfterViewInit {
  postsId: number = 0;
  posts: Posts | undefined;
  headers: any = [];
  constructor(private postsService: PostsService,
    private activatedRoute: ActivatedRoute,) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      document.querySelectorAll('h1, h2').forEach((el: any) => {
        console.log('el', el.tagName);
        this.headers.push({
          tag: el.tagName,
          id: el.textContent
        });
        console.log('this.headers', this.headers);
        console.log('el.textContent?.toLowerCase()', el.textContent?.toLowerCase().replace(/ /g, '_'));
        el.setAttribute('id', el.textContent?.toLowerCase().replace(/ /g, '_').replace(/[^a-zA-Z_]/g, ''));
      });
    }, 1000);
  }

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

  getIdScroll(header: string): string {
    return `#${header?.toLowerCase().replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '')}`;
  }

  scroll(header: string): void {
    console.log('scroll');
    const id = `#${header?.toLowerCase().replace(/ /g, '_').replace(/[^a-zA-Z_]/g, '')}`;
    console.log('id', id);
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
