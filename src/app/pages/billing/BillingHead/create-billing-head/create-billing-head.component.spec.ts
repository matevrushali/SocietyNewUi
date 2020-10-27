import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillingHeadComponent } from './create-billing-head.component';

describe('CreateBillingHeadComponent', () => {
  let component: CreateBillingHeadComponent;
  let fixture: ComponentFixture<CreateBillingHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBillingHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBillingHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
