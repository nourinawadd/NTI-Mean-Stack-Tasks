import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string): Observable<User> {
    return this.http.post<User>('/api/auth/login', { username }).pipe(
      tap(user => this.userSubject.next(user))
    );
  }

  register(username: string, imgurl: string = ''): Observable<User> {
    return this.http.post<User>('/api/auth/register', { username, imgurl }).pipe(
      tap(user => this.userSubject.next(user))
    );
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }
}
