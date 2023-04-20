import { LocalStorageHelperService } from 'src/app/shares/services/token-storage/localstorage-helper.service';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from './../../../shares/services/series/series.service';
import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Posts } from 'src/app/shares/models/posts/posts';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { switchMap } from 'rxjs';

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

  isUpdate: boolean = false;
  dataUpdate: any;
  listPostsOld: any[] = [];

  currentUser = this.localStorageHelperService.getUser();

  placeholder = `Markdown syntax is supported. Click ? for Help \n
      To next line, using HTML <br> tag or Enter Twice \n
      Click “Next” 👁️ to preview mode \n
      Click icon “Code” 💻 to embed code your posts \n
      CLick icon “Image” 📷 to upload image \n
      Please hover to any icon for show tooltip. Give me any feedback if any. \n`

  constructor(private modalService: NgbModal,
              private postsService: PostsService,
              private notifyService: NotifyService,
              private seriesService: SeriesService,
              private activatedRoute: ActivatedRoute,
              private localStorageHelperService: LocalStorageHelperService) {}
  ngOnInit(): void {
    this.listenService();
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.isUpdate = true;
        this.seriesService.getSeriesById(params.id).subscribe((series: any) => {
          if (!series) {
            return;
          }
          this.dataUpdate = series;
          this.seriesForm.patchValue({
            title: series.name,
            status: series.status,
          });
          this.textDescriptionSeries = series.description;
        });

        this.postsService.getPostsBySeries(params.id).subscribe((posts: any) => {
          this.listPostsOld.push(...posts.items);
          this.listPostsSelectedAfterSubmit = posts.items;
          this.listPostsSelected = posts.items;
        });
      }
    });
  }

  onchange(event: any): void {
    this.textDescriptionSeries = event;
  }

  listenService(page = 1, itemsSize = 10, sort = 'desc'): void {
    this.postsService.getPosts(page, itemsSize, sort, this.currentUser.username).subscribe((posts: any) => {
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
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listPostsSelectedAfterSubmit, event.previousIndex, event.currentIndex);
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }

  removePosts(posts: Posts): void {
    this.listPostsSelectedAfterSubmit = this.listPostsSelectedAfterSubmit.filter((item: Posts) => item.id !== posts.id);
    this.listPostsSelected = this.listPostsSelectedAfterSubmit;
    this.notifyService.success('Remove posts from series successfully!', 'Notification');
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
    if (this.isUpdate) {
      const listAdd = listIdPostsSelected.filter((item: any) => !this.listPostsOld.some((itemOld: any) => itemOld.id === item));
      const listRemove = this.listPostsOld.filter((item: any) => !listIdPostsSelected.some((itemOld: any) => itemOld === item.id));
      const listIdRemove = listRemove.map((item: any) => item.id);

      this.seriesService.updateSeries(this.dataUpdate.id, data).pipe(
        switchMap((res: any) => {
          return this.seriesService.addPostsToSeries(this.dataUpdate.id, listAdd, listIdRemove);
        })
      ).subscribe((res: any) => {
        this.notifyService.success('Update series successfully!', 'Notification');
        this.seriesForm.reset();
        this.listPostsSelectedAfterSubmit = [];
        this.textDescriptionSeries = '';
      });
      return;
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
