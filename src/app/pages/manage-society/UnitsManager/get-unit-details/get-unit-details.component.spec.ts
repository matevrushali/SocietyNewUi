import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUnitDetailsComponent } from './get-unit-details.component';

describe('GetUnitDetailsComponent', () => {
  let component: GetUnitDetailsComponent;
  let fixture: ComponentFixture<GetUnitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUnitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
