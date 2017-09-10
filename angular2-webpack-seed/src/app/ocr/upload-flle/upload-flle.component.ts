import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload-flle',
  templateUrl: './upload-flle.component.html',
  styleUrls: ['./upload-flle.component.css']
})
export class UploadFlleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadFile(files) {
    console.log(files);
  }

}
