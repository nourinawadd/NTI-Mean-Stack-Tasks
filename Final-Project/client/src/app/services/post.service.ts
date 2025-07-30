import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }

  createPost(userId: string, content: string): Observable<Post> {
    return this.http.post<Post>('/api/posts', { userId, content });
  }

  toggleLike(postId: string, userId: string): Observable<Post> {
    return this.http.post<Post>(`/api/posts/${postId}/like`, { userId });
  }

  addComment(postId: string, userId: string, text: string): Observable<Comment> {
    return this.http.post<Comment>(`/api/posts/${postId}/comment`, { userId, text });
  }


  deletePost(postId: string): Observable<any> {
    return this.http.delete(`/api/posts/${postId}`);
  }
}
