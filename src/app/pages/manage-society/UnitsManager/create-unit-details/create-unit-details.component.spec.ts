import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnitDetailsComponent } from './create-unit-details.component';

describe('CreateUnitDetailsComponent', () => {
  let component: CreateUnitDetailsComponent;
  let fixture: ComponentFixture<CreateUnitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUnitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
