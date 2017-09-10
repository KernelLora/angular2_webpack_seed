import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';
import { MytodosRoutingModule} from './mytodos-routing.module';
import { MyTodosComponent}from './my-todos-things/my-todos.component';
import { MdInputModule,
        MdButtonModule,
        MdIconModule, 
        MdListModule} from '@angular/material';
import { MyTodoControlComponent } from './my-todo-control/my-todo-control.component';
import {  ReactiveFormsModule }   from '@angular/forms';
import { MyTodoListComponent } from './my-todo-list/my-todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MytodosRoutingModule
  ],
  declarations: [MyTodosComponent, MyTodoControlComponent, MyTodoListComponent]
})
export class MyTodosModule { }
