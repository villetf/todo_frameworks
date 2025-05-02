import { computed, Injectable, signal } from "@angular/core";
import { todos as todosFromFile } from "./todos";

@Injectable({
   providedIn: 'root'
})

export class TodosService {
   todos = signal(todosFromFile);

   filteredTodos = computed(() => this.todos().filter(t => !t.done));

   getAllTodos() {
      console.log('filtrerade', this.filteredTodos());
      return this.filteredTodos;
   }

   addNewTodo(todo: string) {
      const newTodo = {
         id: this.todos().length + 1,
         todo: todo,
         done: false
      }

      

      const newTodos = [...this.todos(), newTodo];
      console.log('todos före', this.todos());
      this.todos.set(newTodos);
      console.log('todos efter', this.todos());
      
   }

   completeTodo(id: number) {
      const newTodos = this.todos().map(todo => 
         todo.id == id ? { ...todo, done: true } : todo
      );

      this.todos.set(newTodos);
   }
}