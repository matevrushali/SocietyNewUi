import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeManagerComponent } from './notice-manager.component';

describe('NoticeManagerComponent', () => {
  let component: NoticeManagerComponent;
  let fixture: ComponentFixture<NoticeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
