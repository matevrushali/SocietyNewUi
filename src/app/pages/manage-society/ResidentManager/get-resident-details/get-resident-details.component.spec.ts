import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResidentDetailsComponent } from './get-resident-details.component';

describe('GetResidentDetailsComponent', () => {
  let component: GetResidentDetailsComponent;
  let fixture: ComponentFixture<GetResidentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetResidentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetResidentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
