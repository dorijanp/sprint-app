import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  user$ = new BehaviorSubject<User | null>(null);
  constructor() {}
}
