import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLossAccountComponent } from './profit-loss-account.component';

describe('ProfitLossAccountComponent', () => {
  let component: ProfitLossAccountComponent;
  let fixture: ComponentFixture<ProfitLossAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitLossAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitLossAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
