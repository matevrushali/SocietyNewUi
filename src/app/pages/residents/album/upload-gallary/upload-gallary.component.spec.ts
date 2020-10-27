import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGallaryComponent } from './upload-gallary.component';

describe('UploadGallaryComponent', () => {
  let component: UploadGallaryComponent;
  let fixture: ComponentFixture<UploadGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
