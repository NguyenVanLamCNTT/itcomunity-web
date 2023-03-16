import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsChoiseComponent } from './editors-choise.component';

describe('EditorsChoiseComponent', () => {
  let component: EditorsChoiseComponent;
  let fixture: ComponentFixture<EditorsChoiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorsChoiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorsChoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
