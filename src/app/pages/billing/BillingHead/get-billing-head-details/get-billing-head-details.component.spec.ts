import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBillingHeadDetailsComponent } from './get-billing-head-details.component';

describe('GetBillingHeadDetailsComponent', () => {
  let component: GetBillingHeadDetailsComponent;
  let fixture: ComponentFixture<GetBillingHeadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBillingHeadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBillingHeadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
