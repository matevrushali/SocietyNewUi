import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnitDetailsComponent } from './update-unit-details.component';

describe('UpdateUnitDetailsComponent', () => {
  let component: UpdateUnitDetailsComponent;
  let fixture: ComponentFixture<UpdateUnitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUnitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
