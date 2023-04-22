import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestTrendingComponent } from './newest-trending.component';

describe('NewestTrendingComponent', () => {
  let component: NewestTrendingComponent;
  let fixture: ComponentFixture<NewestTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestTrendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
