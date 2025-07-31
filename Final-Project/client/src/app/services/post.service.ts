import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private apiUrl = 'http://localhost:3000/posts';

  private refreshPostsSubject = new BehaviorSubject<void>(undefined);
  refreshPosts$ = this.refreshPostsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  addPost(content: string): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, { content });
  }

  triggerRefresh() {
    this.refreshPostsSubject.next();
  }
}
