import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNoticeManagerDetailsComponent } from './get-notice-manager-details.component';

describe('GetNoticeManagerDetailsComponent', () => {
  let component: GetNoticeManagerDetailsComponent;
  let fixture: ComponentFixture<GetNoticeManagerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNoticeManagerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNoticeManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
