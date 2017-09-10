import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodoControlComponent } from './my-todo-control.component';

describe('MyTodoControlComponent', () => {
  let component: MyTodoControlComponent;
  let fixture: ComponentFixture<MyTodoControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTodoControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTodoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
