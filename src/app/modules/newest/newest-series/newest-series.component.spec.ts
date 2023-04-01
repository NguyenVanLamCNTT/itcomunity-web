import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestSeriesComponent } from './newest-series.component';

describe('NewestSeriesComponent', () => {
  let component: NewestSeriesComponent;
  let fixture: ComponentFixture<NewestSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
