import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseControl } from '../control-classes/base-control';

@Injectable()
export class MytodoControlService {
  
  constructor() { }

  toFormGroup(todoItem: BaseControl<any>[] ) {
    let group: any = {};

    todoItem.forEach(item => {
      group[item.key] = item.required ? new FormControl(item.value || '', Validators.required) : new FormControl(item.value || '');
    });
    return new FormGroup(group);
  }
}