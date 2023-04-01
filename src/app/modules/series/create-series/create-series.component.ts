import { SeriesService } from './../../../shares/services/series/series.service';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Posts } from 'src/app/shares/models/posts/posts';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';

@Component({
  selector: 'app-create-series',
  templateUrl: './create-series.component.html',
  styleUrls: ['./create-series.component.scss']
})
export class CreateSeriesComponent implements OnInit{
  seriesForm = this.initForm();
  readonly: boolean = false;
  closeResult = '';
  posts: any;
  listPostsSelected: Posts[] = [];
  listPostsSelectedAfterSubmit: Posts[] = [];
  toasts: any[] = [];
  textDescriptionSeries: string = '';
  countLine = 0;
  countWork = 0;

  // pagination
  page: number = 1;
  count: number = 0;
  itemsSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private modalService: NgbModal,
              private postsService: PostsService,
              private notifyService: NotifyService,
              private seriesService: SeriesService) {}
  ngOnInit(): void {
    this.listenService();
  }

  onchange(event: any): void {
    this.textDescriptionSeries = event;
  }

  listenService(page = 1, itemsSize = 10, sort = 'desc'): void {
    this.postsService.getPosts(page, itemsSize, sort).subscribe((posts: any) => {
      this.posts = posts;
    });
  }

  initForm(): FormGroup{
    return new FormGroup({
      title: new FormControl('', [Validators.required]),
      status: new FormControl('publish', [Validators.required]),
    });
  }

  open(content: any): void{
		this.modalService.open(content, { centered: true, size: 'lg' }).result.then(
			(result) => {
				console.log(result);
			}
		).catch((error) => {
      console.log(error);
    });
	}

  selectPosts(posts: Posts): void {
    const isCheck = this.listPostsSelected.find((item: Posts) => item.id === posts.id);
    if (isCheck) {
      this.listPostsSelected = this.listPostsSelected.filter((item: Posts) => item.id !== posts.id);
      return;
    }
    this.listPostsSelected.push(posts);
  }

  isCheckActive(posts: Posts): boolean {
    const isCheck = this.listPostsSelected.find((item: Posts) => item.id === posts.id);
    return isCheck ? true : false;
  }

  addPosts(): void {
    this.listPostsSelectedAfterSubmit = this.listPostsSelected;
    this.notifyService.success('Add posts to series successfully!', 'Notification');
    this.modalService.dismissAll();
    console.log('this.listPostsSelectedAfterSubmit', this.listPostsSelectedAfterSubmit);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listPostsSelectedAfterSubmit, event.previousIndex, event.currentIndex);
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }

  submit(): void {
    const listIdPostsSelected = this.listPostsSelectedAfterSubmit.map((item: Posts) => item.id);
    let keywordsPosts: any = [];
    this.listPostsSelectedAfterSubmit.map((item: Posts) => keywordsPosts.push(...item.keywords));
    keywordsPosts = [...new Set(keywordsPosts)];
    const data = {
      name: this.seriesForm.value.title,
      description: this.textDescriptionSeries,
      postIds: listIdPostsSelected,
      keywords: keywordsPosts,
      status: this.seriesForm.value.status
    }

    this.seriesService.createSeries(data).subscribe((res: any) => {
      this.notifyService.success('Create series successfully!', 'Notification');
      this.seriesForm.reset();
      this.listPostsSelectedAfterSubmit = [];
      this.textDescriptionSeries = '';
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listenService(this.page, this.itemsSize);
  }
}
