import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEscalationMatrixDetailsComponent } from './get-escalation-matrix-details.component';

describe('GetEscalationMatrixDetailsComponent', () => {
  let component: GetEscalationMatrixDetailsComponent;
  let fixture: ComponentFixture<GetEscalationMatrixDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEscalationMatrixDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEscalationMatrixDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
