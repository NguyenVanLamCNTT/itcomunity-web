import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsManagerComponent } from './topics-manager.component';

describe('TopicsManagerComponent', () => {
  let component: TopicsManagerComponent;
  let fixture: ComponentFixture<TopicsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
