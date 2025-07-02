import { Component, input, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo implements OnInit {
 todoList: string[] = [];
  inputvalue: string = "";

  constructor(private todoService: Service) {}

  ngOnInit(): void {
    this.todoList = this.todoService.getTodos();
  }

  insert() {
    if (this.inputvalue.trim()) {
      this.todoService.addTodo(this.inputvalue);
      this.inputvalue = "";
      this.todoList = this.todoService.getTodos(); // Refresh list
    }
  }

  removetodo(task: string) {
    this.todoService.removeTodo(task);
    this.todoList = this.todoService.getTodos(); // Refresh list
  }
}
