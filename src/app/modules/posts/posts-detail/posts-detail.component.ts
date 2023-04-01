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
        this.headers.push({
          tag: el.tagName,
          id: el.textContent
        });
        el.setAttribute('id', el.textContent?.toLowerCase().replace(/ /g, '_').replace(/[^a-zA-Z_]/g, ''));
      });
    }, 1000);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.postsId = res?.id;
    });
    this.listenService();
    window.addEventListener('scroll', this.setFixedSideBar);
  }
  setFixedSideBar(event: any) {
    const scrollValue = window.pageYOffset;
    this.headers?.forEach((header: any) => {
      // find the element that is currently in the viewport
      const element = document.querySelector(this.getIdScroll(header.id));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < 0) {
        }
      }
    });
  }

  listenService(): void {
    this.postsService.getPostsById(this.postsId).subscribe(posts => {
      this.posts = posts;
    })
  }

  getIdScroll(header: string): string {
    return `#${header?.toLowerCase().replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '')}`;
  }

  scroll(header: string): void {
    const id = `#${header?.toLowerCase().replace(/ /g, '_').replace(/[^a-zA-Z_]/g, '')}`;
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
