import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFlleComponent}from './upload-flle/upload-flle.component';

const myTodoRoutes: Routes = [
   { path: '', component:UploadFlleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(myTodoRoutes)],
  exports: [RouterModule]
})
export class OcrRoutingModule {}