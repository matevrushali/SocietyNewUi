import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVendorsDetailsComponent } from './get-vendors-details.component';

describe('GetVendorsDetailsComponent', () => {
  let component: GetVendorsDetailsComponent;
  let fixture: ComponentFixture<GetVendorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVendorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVendorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
