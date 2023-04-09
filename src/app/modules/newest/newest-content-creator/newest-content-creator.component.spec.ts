import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestContentCreatorComponent } from './newest-content-creator.component';

describe('NewestContentCreatorComponent', () => {
  let component: NewestContentCreatorComponent;
  let fixture: ComponentFixture<NewestContentCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestContentCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestContentCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
