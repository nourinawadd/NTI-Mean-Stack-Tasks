import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = '/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createPost(content: string, userId: string): Observable<any> {
    return this.http.post(this.apiUrl, { content, userId });
  }

  likePost(postId: string, userId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/like`, { userId });
  }

  addComment(postId: string, userId: string, text: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/comment`, { userId, text });
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${postId}`);
  }
}
