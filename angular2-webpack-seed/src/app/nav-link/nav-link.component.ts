import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent implements OnInit {

  constructor() { 
  }
     navLInkItems = [
      {
        icon:'home',
        iconText:'Home',
        url:'/home'
      },
        {
        icon:'all_out',
        iconText:'OCR',
         url:'/extract-text'
      },
      {
        icon:'list',
        iconText:'My TODOs',
        url:'/my-todos'
      }
    ];

  ngOnInit() {
  }


}
