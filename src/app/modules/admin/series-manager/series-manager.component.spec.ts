import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesManagerComponent } from './series-manager.component';

describe('SeriesManagerComponent', () => {
  let component: SeriesManagerComponent;
  let fixture: ComponentFixture<SeriesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
