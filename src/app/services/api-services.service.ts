import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from '../shared/models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private _http:HttpClient) {}

  getData(): Observable<Todo[]>{
    return this._http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
