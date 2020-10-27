import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskExecutiveComponent } from './helpdesk-executive.component';

describe('HelpdeskExecutiveComponent', () => {
  let component: HelpdeskExecutiveComponent;
  let fixture: ComponentFixture<HelpdeskExecutiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskExecutiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
