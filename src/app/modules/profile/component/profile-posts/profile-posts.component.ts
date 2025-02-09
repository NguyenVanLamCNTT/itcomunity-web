import { LocalStorageHelperService } from 'src/app/shares/services/token-storage/localstorage-helper.service';
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
  isPublic: boolean = true;
  // Pagination
  page: number = 1;
  count: number = 0;
  itemsSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  currentUser = this.localStorageHelperService.getUser();
  constructor(private activatedRoute: ActivatedRoute,
              private postsService: PostsService,
              private router: Router,
              private loadingServiceService: LoadingServiceService,
              private localStorageHelperService: LocalStorageHelperService) { 
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.username = params.username;
    });
    this.listenService();
  }

  isShowPrivateOption(): boolean {
    if (this.currentUser?.username === this.username) {
      return true;
    }
    return false;
  }

  listenService(page = 1, itemsSize = 10, sort = 'desc', status = 'PUBLISH'): void {
    this.loadingServiceService.showLoading();
    this.postsService.getPosts(page, itemsSize, sort, this.username, undefined, status).subscribe((posts: any) => {
      this.listPosts = posts;
      this.loadingServiceService.hideLoading();
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    if (this.isPublic) {
      this.listenService(this.page, this.itemsSize);
    } else {
      this.listenService(this.page, this.itemsSize, 'desc', 'DRAFT');
    }
  }

  changeStatus(event: any) {
    const status = event.target.value;
    if (status === 'PUBLISH') {
      this.isPublic = true;
    } else {
      this.isPublic = false;
    }
    this.listenService(this.page, this.itemsSize, 'desc', status);
  }
}
