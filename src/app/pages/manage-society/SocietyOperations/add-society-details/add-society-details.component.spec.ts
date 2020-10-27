import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocietyDetailsComponent } from './add-society-details.component';

describe('AddSocietyDetailsComponent', () => {
  let component: AddSocietyDetailsComponent;
  let fixture: ComponentFixture<AddSocietyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSocietyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSocietyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
