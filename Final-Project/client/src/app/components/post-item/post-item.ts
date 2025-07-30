import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post.model'; 

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <p class="card-text">{{ post.content }}</p>
        <button class="btn btn-sm btn-outline-primary me-2" (click)="likePost()">
          ❤️ Like ({{ post.likes }})
        </button>
        <button class="btn btn-sm btn-outline-danger" (click)="deletePost()">🗑️ Delete</button>

        <div class="mt-3">
          <input [(ngModel)]="commentText" (keyup.enter)="addComment()" class="form-control mb-2" placeholder="Write a comment...">
          <div *ngFor="let comment of post.comments" class="border-top pt-2">
            {{ comment }}
          </div>
        </div>
      </div>
    </div>
  `
})
export class PostItem {
  @Input() post!: Post; // ✅ THIS LINE is correct and already present
  commentText = '';

  constructor(private http: HttpClient) {}

  addComment() {
    if (!this.commentText.trim()) return;
    this.http.post<Post>(`http://localhost:3000/posts/${this.post._id}/comments`, { text: this.commentText }).subscribe(updatedPost => {
      this.post = updatedPost;
      this.commentText = '';
    });
  }

  deletePost() {
    this.http.delete(`http://localhost:3000/posts/${this.post._id}`).subscribe(() => {
      location.reload();
    });
  }

  likePost() {
    this.http.post<Post>(`http://localhost:3000/posts/${this.post._id}/like`, {}).subscribe(updatedPost => {
      this.post.likes = updatedPost.likes;
    });
  }
}
