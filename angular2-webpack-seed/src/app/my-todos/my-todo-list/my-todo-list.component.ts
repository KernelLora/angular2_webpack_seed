import { Component,Input, OnInit, ViewChild,Renderer2 , ElementRef} from '@angular/core';

@Component({
  selector: 'app-my-todo-list',
  templateUrl: './my-todo-list.component.html',
  styleUrls: ['./my-todo-list.component.css']
})
export class MyTodoListComponent implements OnInit {
render:Renderer2;
@Input() todoListArray;

todoElement:ElementRef;
strikeClass:any ={};
  constructor(render:Renderer2, elementRef: ElementRef) { 
    this.todoElement = elementRef;
    this.render = render;
  }

  ngOnInit() {
  }


  deleteTodoItem(evt, index){
   this.strikeClass['strike' + index] = !this.strikeClass['strike' + index];
  }

}
