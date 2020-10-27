import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOutStandingsComponent } from './current-out-standings.component';

describe('CurrentOutStandingsComponent', () => {
  let component: CurrentOutStandingsComponent;
  let fixture: ComponentFixture<CurrentOutStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOutStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOutStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
