import { TodoListService } from './../todo-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  placeholderText = '請輸入代辦事項';
  todoText = '';

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  addTodo($event: MouseEvent) {
    this.todoListService.addTodo(this.todoText);
  }
}
