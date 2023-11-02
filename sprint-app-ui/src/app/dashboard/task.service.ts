import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../shared/models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTask(id: number) {
    return this.http.get<Task>('http://localhost:3000/task/' + id);
  }
}
