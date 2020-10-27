import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLedgersListComponent } from './member-ledgers-list.component';

describe('MemberLedgersListComponent', () => {
  let component: MemberLedgersListComponent;
  let fixture: ComponentFixture<MemberLedgersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberLedgersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLedgersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
