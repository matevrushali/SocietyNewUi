import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVendorsDetailsComponent } from './update-vendors-details.component';

describe('UpdateVendorsDetailsComponent', () => {
  let component: UpdateVendorsDetailsComponent;
  let fixture: ComponentFixture<UpdateVendorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVendorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVendorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
