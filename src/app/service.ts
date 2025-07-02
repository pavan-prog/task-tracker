import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor() { }
  private todoList: string[] = ["Task-1", "Task-2"];

  getTodos(): string[] {
    return this.todoList;
  }

  addTodo(task: string) {
    this.todoList.push(task);
  }

  removeTodo(task: string) {
    this.todoList = this.todoList.filter(t => t !== task);
  }
}
