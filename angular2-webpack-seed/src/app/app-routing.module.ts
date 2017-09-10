import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
   { path: '', redirectTo: 'app/home/home.module#HomeModule' , pathMatch: 'full'},
  { path: 'extract-text', loadChildren: 'app/ocr/ocr.module#OcrModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'my-todos', loadChildren: 'app/my-todos/my-todos.module#MyTodosModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}