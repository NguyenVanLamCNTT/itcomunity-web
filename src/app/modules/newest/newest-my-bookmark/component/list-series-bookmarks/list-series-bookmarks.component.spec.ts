import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeriesBookmarksComponent } from './list-series-bookmarks.component';

describe('ListSeriesBookmarksComponent', () => {
  let component: ListSeriesBookmarksComponent;
  let fixture: ComponentFixture<ListSeriesBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSeriesBookmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSeriesBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
