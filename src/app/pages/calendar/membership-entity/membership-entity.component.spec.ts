import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipEntityComponent } from './membership-entity.component';

describe('MembershipEntityComponent', () => {
  let component: MembershipEntityComponent;
  let fixture: ComponentFixture<MembershipEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
