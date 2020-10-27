import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGenerateBillDetailsComponent } from './get-generate-bill-details.component';

describe('GetGenerateBillDetailsComponent', () => {
  let component: GetGenerateBillDetailsComponent;
  let fixture: ComponentFixture<GetGenerateBillDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetGenerateBillDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGenerateBillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
