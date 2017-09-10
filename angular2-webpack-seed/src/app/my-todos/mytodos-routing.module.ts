import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTodosComponent}from './my-todos-things/my-todos.component';

const myTodoRoutes: Routes = [
   { path: '', component:MyTodosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(myTodoRoutes)],
  exports: [RouterModule]
})
export class MytodosRoutingModule {}