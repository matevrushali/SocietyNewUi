import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVendorsListComponent } from './new-vendors-list.component';

describe('NewVendorsListComponent', () => {
  let component: NewVendorsListComponent;
  let fixture: ComponentFixture<NewVendorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVendorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVendorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
