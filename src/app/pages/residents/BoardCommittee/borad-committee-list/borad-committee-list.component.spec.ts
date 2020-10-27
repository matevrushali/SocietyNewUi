import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoradCommitteeListComponent } from './borad-committee-list.component';

describe('BoradCommitteeListComponent', () => {
  let component: BoradCommitteeListComponent;
  let fixture: ComponentFixture<BoradCommitteeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoradCommitteeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoradCommitteeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
