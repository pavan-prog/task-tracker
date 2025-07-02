import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo implements OnInit {

  todoList : string[] = [];
  inputvalue : string = "";
  insert(){
    this.todoList.push(this.inputvalue);
  }

  removetodo(name:string){
    this.todoList = this.todoList.filter(value=>value!==name);
  }
  ngOnInit(): void {
    this.todoList = ["Task-1","Task-2"]
  }

}
