import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHeadComponent } from './billing-head.component';

describe('BillingHeadComponent', () => {
  let component: BillingHeadComponent;
  let fixture: ComponentFixture<BillingHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
