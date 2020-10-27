import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetParkingDetailsComponent } from './get-parking-details.component';

describe('GetParkingDetailsComponent', () => {
  let component: GetParkingDetailsComponent;
  let fixture: ComponentFixture<GetParkingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetParkingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetParkingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
