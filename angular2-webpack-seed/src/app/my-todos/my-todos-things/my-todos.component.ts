import { Component,Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup }   from '@angular/forms';
import { BaseControl }  from '../control-classes/base-control';
import  { MyTodoService } from '../services/my-todo.service';
import { MytodoControlService } from '../services/my-todo-control.service';

@Component({
  selector: 'app-my-todos',
  templateUrl: './my-todos.component.html',
  styleUrls: ['./my-todos.component.css'],
  providers:[MytodoControlService, MyTodoService]
})
export class MyTodosComponent implements OnInit {
  
todoItem: BaseControl<any>[] = [];

  todoform: FormGroup;
  payLoad = '';

  todoItemArrayList:any = [];

  constructor(private todoLabels : MyTodoService ,private todoControls : MytodoControlService) {
    this.todoItem = todoLabels.getQuestions();
   }

   ngOnInit() {
    this.todoform = this.todoControls.toFormGroup(this.todoItem);
  }
 
  onSubmit() {
    debugger;
     this.todoItemArrayList.push(this.todoform.value);
     this.todoform.reset()
  }

}


