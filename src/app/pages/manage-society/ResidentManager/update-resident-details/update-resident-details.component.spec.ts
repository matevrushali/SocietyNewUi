import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResidentDetailsComponent } from './update-resident-details.component';

describe('UpdateResidentDetailsComponent', () => {
  let component: UpdateResidentDetailsComponent;
  let fixture: ComponentFixture<UpdateResidentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResidentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResidentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
