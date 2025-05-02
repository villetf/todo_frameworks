import { Component } from "@angular/core";
import { DailyTodoComponent } from "../daily-todo/daily-todo.component";
import { NewTodoFormComponent } from "../new-todo-form/new-todo-form.component";

@Component({
  selector: "app-header",
  imports: [DailyTodoComponent, NewTodoFormComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
  standalone: true
})

export class HeaderComponent {

}