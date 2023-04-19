import { TopicService } from './../../../shares/services/topic/topic.service';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { switchMap } from 'rxjs';
import { Posts } from 'src/app/shares/models/posts/posts';
import { PostsService } from './../../../shares/services/posts/posts.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit, AfterViewInit {
  postsId: number = 0;
  posts: Posts | undefined;
  headers: any = [];
  postsRelatedAuthor: any;
  constructor(private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private notifyService: NotifyService,
    private router: Router,
    private topicService: TopicService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      document.querySelectorAll('h2, h3').forEach((el: any) => {
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
      const element = document.querySelector(this.getIdScroll(header.id));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < 0) {
        }
      }
    });
  }

  listenService(): void {
    this.postsService.getPostsById(this.postsId).pipe(
      switchMap((posts: any) => {
        this.posts = posts;
        return this.postsService.updateView(posts.id);
      }),
      switchMap((res: any) => {
        return this.postsService.getPosts(1, 10, undefined, this.posts?.author?.username)
      })
    ).subscribe(
      (res: any) => {
        this.postsRelatedAuthor = res?.items.filter((res: Posts) => res.id !== this.posts?.id).slice(0, 3);
      }
    );
  }

  getIdScroll(header: string): string {
    return `#${header?.toLowerCase().replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '')}`;
  }

  scroll(header: string): void {
    const id = `#${header?.toLowerCase().replace(/ /g, '_').replace(/[^a-zA-Z_]/g, '')}`;
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  deletePosts(postsId: any): void {
    this.postsService.deletePosts(postsId).subscribe((res: any) => {
      this.notifyService.success('Delete posts successfully!', 'Success');
      this.router.navigate(['/home/newest/posts']);
    },
      (err: any) => {
        this.notifyService.error('Delete posts failed!', 'Error');
      });
  }
}
