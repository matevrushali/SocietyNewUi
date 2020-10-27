import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFlatsUnitsComponent } from './import-flats-units.component';

describe('ImportFlatsUnitsComponent', () => {
  let component: ImportFlatsUnitsComponent;
  let fixture: ComponentFixture<ImportFlatsUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportFlatsUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFlatsUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
