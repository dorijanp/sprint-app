import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../shared/models/task';
import { UpdateTask } from '../shared/models/updateTask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTask(id: number) {
    return this.http.get<Task>('http://localhost:3000/task/' + id);
  }

  updateTask(id: number, task: UpdateTask) {
    return this.http.put<Task>('http://localhost:3000/task/' + id, {
      ...task,
    });
  }
  createTask(task: any) {
    return this.http.post<Task>('http://localhost:3000/task', {
      ...task,
    });
  }
}
