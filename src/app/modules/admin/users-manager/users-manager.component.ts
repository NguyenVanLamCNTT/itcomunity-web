import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingServiceService } from 'src/app/shares/services/loading/loading-service.service';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { SeriesService } from 'src/app/shares/services/series/series.service';
import { UserService } from 'src/app/shares/services/user/user.service';
import { ConfirmModalComponent } from 'src/app/shares/share-ui/modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.scss']
})
export class UsersManagerComponent {
  displayedColumns: string[] = ['author', 'username', 'postsNumber', 'questionsNumber', 'seriesNumber', 'action'];
  dataSource = new MatTableDataSource<any>();
  totalUsers: number = 0;

  constructor(private userService: UserService,
    private notifyService: NotifyService,
    private modalService: NgbModal,
    private loadingServiceService: LoadingServiceService) { }
  ngOnInit(): void {
    this.listenService();
  }

  listenService(): void {
    this.loadingServiceService.showLoading();
    this.userService.getAllUsers(1, 1000).subscribe((res: any) => {
      this.totalUsers = res.totalItems;
      this.dataSource.data = res.items;
      this.loadingServiceService.hideLoading();
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deletePosts(user: any): void {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.action = 'delete';
    modalRef.componentInstance.title = 'Delete This User';
    modalRef.componentInstance.content = 'Are you sure you want to delete this User?';
    modalRef.result.then((result) => {
      this.userService.deleteUser(user.id).subscribe(res => {
        this.notifyService.success('Delete user successfully!', 'Success');
        this.listenService();
      }, err => {
        this.notifyService.error('Delete user failed!', 'Error');
      })
    }).catch((error) => {
      console.log(error);
    });
  }
}
