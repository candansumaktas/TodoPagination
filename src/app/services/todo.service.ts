import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl: string = 'http://localhost:3000/todos';

  constructor(private httpClient:HttpClient) {}

  getTodos():Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl)
  }

  getTodoById(id:number):Observable<Todo>{
    return this.httpClient.get<Todo>(this.apiUrl + '/' + id)
  }

  getTodosByUser(userId:number):Observable<Todo[]>{
    let newPath = this.apiUrl;
    if(userId){
      newPath += "?userId=" + userId;
    }
    return this.httpClient.get<Todo[]>(newPath);
  }
}
