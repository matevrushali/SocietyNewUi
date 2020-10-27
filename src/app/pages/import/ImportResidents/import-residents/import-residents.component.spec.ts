import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportResidentsComponent } from './import-residents.component';

describe('ImportResidentsComponent', () => {
  let component: ImportResidentsComponent;
  let fixture: ComponentFixture<ImportResidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportResidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
