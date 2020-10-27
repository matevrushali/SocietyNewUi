import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantMovementComponent } from './tenant-movement.component';

describe('TenantMovementComponent', () => {
  let component: TenantMovementComponent;
  let fixture: ComponentFixture<TenantMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantMovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
