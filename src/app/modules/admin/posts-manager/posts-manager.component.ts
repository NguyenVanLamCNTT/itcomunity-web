import { LoadingServiceService } from './../../../shares/services/loading/loading-service.service';
import { NotifyService } from './../../../shares/services/notify/notify.service';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shares/share-ui/modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-posts-manager',
  templateUrl: './posts-manager.component.html',
  styleUrls: ['./posts-manager.component.scss']
})
export class PostsManagerComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['author', 'name', 'status', 'created', 'modified', 'action'];
  dataSource = new MatTableDataSource<any>();
  totalPosts: number = 0;

  constructor(private postsService: PostsService,
    private notifyService: NotifyService,
    private modalService: NgbModal,
    private loadingServiceService: LoadingServiceService) { }
  ngOnInit(): void {
    this.listenService();
  }

  listenService(): void {
    this.loadingServiceService.showLoading();
    this.postsService.getPosts(1, 1000).subscribe((res: any) => {
      this.totalPosts = res.totalItems;
      this.dataSource.data = res.items;
      this.loadingServiceService.hideLoading();

    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deletePosts(posts: any): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.action = 'delete';
    modalRef.componentInstance.title = 'Delete This Series';
    modalRef.componentInstance.content = 'Are you sure you want to delete this series?';
    modalRef.result.then((result) => {
      this.postsService.deletePosts(posts.id).subscribe(res => {
        this.notifyService.success('Delete posts successfully!', 'Success');
        this.listenService();
      }, err => {
        this.notifyService.error('Delete posts failed!', 'Error');
      });
    }).catch((error) => {
      console.log(error);
    });
  }
}
