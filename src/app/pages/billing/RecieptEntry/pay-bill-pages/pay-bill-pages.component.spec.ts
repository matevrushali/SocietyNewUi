import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBillPagesComponent } from './pay-bill-pages.component';

describe('PayBillPagesComponent', () => {
  let component: PayBillPagesComponent;
  let fixture: ComponentFixture<PayBillPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayBillPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBillPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
