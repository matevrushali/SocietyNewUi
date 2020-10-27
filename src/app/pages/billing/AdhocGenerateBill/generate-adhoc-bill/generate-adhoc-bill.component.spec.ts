import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAdhocBillComponent } from './generate-adhoc-bill.component';

describe('GenerateAdhocBillComponent', () => {
  let component: GenerateAdhocBillComponent;
  let fixture: ComponentFixture<GenerateAdhocBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateAdhocBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateAdhocBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
