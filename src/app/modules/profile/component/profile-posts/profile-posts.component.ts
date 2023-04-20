import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { LoadingServiceService } from 'src/app/shares/services/loading/loading-service.service';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss']
})
export class ProfilePostsComponent implements OnInit{
  username: string | undefined;
  listPosts: any;

  // Pagination
  page: number = 1;
  count: number = 0;
  itemsSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private activatedRoute: ActivatedRoute,
              private postsService: PostsService,
              private router: Router,
              private loadingServiceService: LoadingServiceService) { 
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.username = params.username;
    });
    this.listenService();
  }

  listenService(page = 1, itemsSize = 10, sort = 'desc'): void {
    this.loadingServiceService.showLoading();
    this.postsService.getPosts(page, itemsSize, sort, this.username).subscribe((posts: any) => {
      this.listPosts = posts;
      this.loadingServiceService.hideLoading();
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenService(this.page, this.itemsSize);
  }
}
