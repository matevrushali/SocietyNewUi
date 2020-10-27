import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocGenerateBillComponent } from './adhoc-generate-bill.component';

describe('AdhocGenerateBillComponent', () => {
  let component: AdhocGenerateBillComponent;
  let fixture: ComponentFixture<AdhocGenerateBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhocGenerateBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhocGenerateBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
