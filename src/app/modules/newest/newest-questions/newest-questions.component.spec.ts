import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestQuestionsComponent } from './newest-questions.component';

describe('NewestQuestionsComponent', () => {
  let component: NewestQuestionsComponent;
  let fixture: ComponentFixture<NewestQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
