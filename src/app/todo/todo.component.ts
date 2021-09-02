import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],

})
export class TodoComponent implements OnInit {
  
  todos: Todo[] = [];
  loading : boolean = true

  page:number=1
  

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {

    this.delay(1000)
    
    // this.todoService.getTodos().subscribe((data) => {
    //   this.todos = data;
    // });

    this.activatedRoute.params.subscribe((params) => {
      this.getTodosByUser(params['userId']);
    });
  }

  getTodosByUser(userId: number) {

    this.todoService.getTodosByUser(userId).subscribe((data) => {
      this.todos = data;
    });
  }

  async delay(ms: number) {

    await new Promise<void>(resolve => setTimeout(() => resolve(), ms)).then(() => {
      this.todoService.getTodos().subscribe(data => {

        
        this.todos = data        
        this.loading = false;
      })
    });
  }


}
