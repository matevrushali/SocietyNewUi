import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBillToBePostComponent } from './get-bill-to-be-post.component';

describe('GetBillToBePostComponent', () => {
  let component: GetBillToBePostComponent;
  let fixture: ComponentFixture<GetBillToBePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBillToBePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBillToBePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
