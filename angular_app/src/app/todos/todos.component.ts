import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: any[] = [];

 // inject the TodoService

 constructor(private _todoService: TodosService) { }

  ngOnInit(): void {
    this.getTodos();
  }
  createTodo() {
    let todo = {
      id: new Date().getTime(),
      title: 'Practice Decorator'
    }
    this._todoService.createTodo(todo).subscribe(res=> {
      console.log('Resourse created', res);
    })
  }
  getTodos() {
    this._todoService.getTodos().subscribe(res=> {
      console.log('get all todos', res);
      this.todoList = res;
    });

  }

  editTodo(todo: any){
    console.log('edit call', todo);
    let data = {
      id : new Date().getTime(),
      title: 'Edit - Practice makes man perfect'
    }

    this._todoService.updateTodo(todo.id, data).subscribe(res => {
      console.log('Data updated successfully', res);
      this.getTodos();
    })

  }

 
  deleteTodo(id: any) {
    console.log('delete called', id);
    this._todoService.deleteTodo(id).subscribe(res => {
      console.log('Record deleted');
      this.getTodos();
    })

  }
}
