import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
   // @Input() todo!:string;
   // @Input() id!:number;
   // @Output() doneItem = new EventEmitter<number>();


   todo = input<Todo>()
   doneItem = output<number>()

   itemDone() {
      // console.log('klick på', this.todo()!.id);
      this.doneItem.emit(this.todo()!.id);
   }
}
