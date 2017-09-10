import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFlleComponent } from './upload-flle.component';

describe('UploadFlleComponent', () => {
  let component: UploadFlleComponent;
  let fixture: ComponentFixture<UploadFlleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFlleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFlleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
