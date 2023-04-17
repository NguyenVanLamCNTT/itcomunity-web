import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestMyBookmarkComponent } from './newest-my-bookmark.component';

describe('NewestMyBookmarkComponent', () => {
  let component: NewestMyBookmarkComponent;
  let fixture: ComponentFixture<NewestMyBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestMyBookmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestMyBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
