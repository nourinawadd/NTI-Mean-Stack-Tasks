import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts = [
    { content: 'Hello World!', comments: ['Nice post!', 'Welcome!'] },
    { content: 'Angular is awesome!', comments: [] }
  ];

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return of(this.posts);
  }

  addPost(content: string): Observable<any> {
    const newPost = { content, comments: [] };
    this.posts.unshift(newPost);
    return of(newPost);
  }
}