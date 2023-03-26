import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSeriesComponent } from './profile-series.component';

describe('ProfileSeriesComponent', () => {
  let component: ProfileSeriesComponent;
  let fixture: ComponentFixture<ProfileSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
