import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestPostsFollowingsComponent } from './newest-posts-followings.component';

describe('NewestPostsFollowingsComponent', () => {
  let component: NewestPostsFollowingsComponent;
  let fixture: ComponentFixture<NewestPostsFollowingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestPostsFollowingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestPostsFollowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
