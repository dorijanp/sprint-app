import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprint } from '../shared/models/sprint';

@Injectable({
  providedIn: 'root',
})
export class SprintService {
  constructor(private http: HttpClient) {}

  getSprints() {
    return this.http.get<Sprint[]>('http://localhost:3000/sprint');
  }

  getSprint(id: number) {
    return this.http.get<Sprint>('http://localhost:3000/sprint/' + id);
  }
}
