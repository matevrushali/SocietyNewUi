import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportParkingComponent } from './import-parking.component';

describe('ImportParkingComponent', () => {
  let component: ImportParkingComponent;
  let fixture: ComponentFixture<ImportParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
