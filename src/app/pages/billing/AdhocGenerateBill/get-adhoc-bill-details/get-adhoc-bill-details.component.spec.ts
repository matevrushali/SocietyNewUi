import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdhocBillDetailsComponent } from './get-adhoc-bill-details.component';

describe('GetAdhocBillDetailsComponent', () => {
  let component: GetAdhocBillDetailsComponent;
  let fixture: ComponentFixture<GetAdhocBillDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAdhocBillDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdhocBillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
