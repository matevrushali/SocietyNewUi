import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardCommitteeComponent } from './add-board-committee.component';

describe('AddBoardCommitteeComponent', () => {
  let component: AddBoardCommitteeComponent;
  let fixture: ComponentFixture<AddBoardCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoardCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoardCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
