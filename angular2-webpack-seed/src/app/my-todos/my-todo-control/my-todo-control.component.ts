import { Component, Input } from '@angular/core';
import { BaseControl }  from '../control-classes/base-control';
import { FormGroup }   from '@angular/forms';

@Component({
  selector: 'app-my-todo-control',
  templateUrl: './my-todo-control.component.html',
  styleUrls: ['./my-todo-control.component.css']
})
export class MyTodoControlComponent {
 
  @Input() addItem: BaseControl<any>;

  @Input() form: FormGroup;

  get isValid() {
  var controlStatus = false;
  if(this.form.controls[this.addItem.key].untouched || this.form.controls[this.addItem.key].valid){
    controlStatus = true;
  }
   return  controlStatus;
  }

}
