import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSocietyDetailsComponent } from './get-society-details.component';

describe('GetSocietyDetailsComponent', () => {
  let component: GetSocietyDetailsComponent;
  let fixture: ComponentFixture<GetSocietyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSocietyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSocietyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
