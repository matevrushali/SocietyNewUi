import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEscalationMatrixComponent } from './add-escalation-matrix.component';

describe('AddEscalationMatrixComponent', () => {
  let component: AddEscalationMatrixComponent;
  let fixture: ComponentFixture<AddEscalationMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEscalationMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEscalationMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
