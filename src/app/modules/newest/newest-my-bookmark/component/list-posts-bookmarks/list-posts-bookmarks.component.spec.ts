import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostsBookmarksComponent } from './list-posts-bookmarks.component';

describe('ListPostsBookmarksComponent', () => {
  let component: ListPostsBookmarksComponent;
  let fixture: ComponentFixture<ListPostsBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostsBookmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostsBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
