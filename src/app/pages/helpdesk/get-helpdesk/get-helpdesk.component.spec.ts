import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHelpdeskComponent } from './get-helpdesk.component';

describe('GetHelpdeskComponent', () => {
  let component: GetHelpdeskComponent;
  let fixture: ComponentFixture<GetHelpdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHelpdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
