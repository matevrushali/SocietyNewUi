import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBillsComponent } from './post-bills.component';

describe('PostBillsComponent', () => {
  let component: PostBillsComponent;
  let fixture: ComponentFixture<PostBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
