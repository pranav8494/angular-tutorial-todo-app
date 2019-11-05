import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'
  todosLimits:string = '?_limit=5';
 	
 	// get todos
  getTodos(): Observable<Todo[]>{
  	return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimits}`);
  }

  // delete todo
  deleteTodo(todo: Todo): Observable<Todo>{
  	const url = `${this.todosUrl}/${todo.id}`;

  	return this.http.delete<Todo>(url, httpOptions);
  }

  // Add todo
  addTodo(todo: Todo): Observable<Todo>{

    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
  // Toggle completed
  toggleCompleted(todo: Todo): Observable<any> {

  	const url = `${this.todosUrl}/${todo.id}`;

  	return this.http.put(url, todo, httpOptions);
  } 


}
