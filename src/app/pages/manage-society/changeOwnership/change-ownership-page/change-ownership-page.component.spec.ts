import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOwnershipPageComponent } from './change-ownership-page.component';

describe('ChangeOwnershipPageComponent', () => {
  let component: ChangeOwnershipPageComponent;
  let fixture: ComponentFixture<ChangeOwnershipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeOwnershipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeOwnershipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
