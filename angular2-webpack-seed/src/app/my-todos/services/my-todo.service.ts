import { Injectable }       from '@angular/core';

import { BaseControl }  from '../control-classes/base-control';
import { TextboxControl }  from '../control-classes/text-box-control';

@Injectable()
export class MyTodoService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: BaseControl<any>[] = [
      new TextboxControl({
        key: 'todoItemTask',
        label: 'Add task',
        value: '',
        required: true,
        order: 1
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}