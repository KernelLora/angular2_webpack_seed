import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule} from '@angular/material';
import {  MdIconModule,
  MdToolbarModule} from '@angular/material';
import { UploadFlleComponent } from './upload-flle/upload-flle.component';
import { OcrRoutingModule } from './ocr-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OcrRoutingModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [UploadFlleComponent]
})
export class OcrModule {  }
