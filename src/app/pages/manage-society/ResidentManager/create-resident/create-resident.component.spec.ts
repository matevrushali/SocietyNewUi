import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResidentComponent } from './create-resident.component';

describe('CreateResidentComponent', () => {
  let component: CreateResidentComponent;
  let fixture: ComponentFixture<CreateResidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
