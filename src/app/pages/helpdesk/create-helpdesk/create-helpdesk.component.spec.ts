import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHelpdeskComponent } from './create-helpdesk.component';

describe('CreateHelpdeskComponent', () => {
  let component: CreateHelpdeskComponent;
  let fixture: ComponentFixture<CreateHelpdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHelpdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
