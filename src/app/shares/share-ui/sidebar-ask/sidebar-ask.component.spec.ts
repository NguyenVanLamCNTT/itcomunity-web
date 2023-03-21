import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAskComponent } from './sidebar-ask.component';

describe('SidebarAskComponent', () => {
  let component: SidebarAskComponent;
  let fixture: ComponentFixture<SidebarAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
