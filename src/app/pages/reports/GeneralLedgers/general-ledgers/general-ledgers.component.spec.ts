import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLedgersComponent } from './general-ledgers.component';

describe('GeneralLedgersComponent', () => {
  let component: GeneralLedgersComponent;
  let fixture: ComponentFixture<GeneralLedgersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLedgersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLedgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
