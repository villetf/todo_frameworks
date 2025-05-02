import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-new-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.css']
})

export class NewTodoFormComponent {

   todosService = inject(TodosService);

   newTodoInput = '';
   
   formSubmit() {
      console.log('form submit', this.newTodoInput);
      this.todosService.addNewTodo(this.newTodoInput);
   }

}
