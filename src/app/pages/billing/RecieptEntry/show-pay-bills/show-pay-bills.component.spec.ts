import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPayBillsComponent } from './show-pay-bills.component';

describe('ShowPayBillsComponent', () => {
  let component: ShowPayBillsComponent;
  let fixture: ComponentFixture<ShowPayBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPayBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPayBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
