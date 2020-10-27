import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncedClearedChequeComponent } from './bounced-cleared-cheque.component';

describe('BouncedClearedChequeComponent', () => {
  let component: BouncedClearedChequeComponent;
  let fixture: ComponentFixture<BouncedClearedChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouncedClearedChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncedClearedChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
