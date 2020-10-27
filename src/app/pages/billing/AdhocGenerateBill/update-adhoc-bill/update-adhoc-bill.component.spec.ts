import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdhocBillComponent } from './update-adhoc-bill.component';

describe('UpdateAdhocBillComponent', () => {
  let component: UpdateAdhocBillComponent;
  let fixture: ComponentFixture<UpdateAdhocBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAdhocBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdhocBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
