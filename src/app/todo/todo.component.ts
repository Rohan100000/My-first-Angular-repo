import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    // Store the value of input 
  todoItem: string = "";
  todoList: string[] = [];

  addToTodoList = () => {
    // pushing todo item to list 
    this.todoList.push(this.todoItem);
    // clear the value of todoItem 
    this.todoItem = ""
  }
}
