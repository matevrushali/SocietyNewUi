import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBillingHeadComponent } from './update-billing-head.component';

describe('UpdateBillingHeadComponent', () => {
  let component: UpdateBillingHeadComponent;
  let fixture: ComponentFixture<UpdateBillingHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBillingHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBillingHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
