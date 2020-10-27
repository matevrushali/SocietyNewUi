import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingNoteComponent } from './billing-note.component';

describe('BillingNoteComponent', () => {
  let component: BillingNoteComponent;
  let fixture: ComponentFixture<BillingNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
