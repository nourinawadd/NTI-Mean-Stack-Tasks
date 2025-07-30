import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <p class="card-text">{{ post.content }}</p>
        <input [(ngModel)]="commentText" (keyup.enter)="addComment()" class="form-control" placeholder="Write a comment..." />
        <div *ngFor="let comment of post.comments" class="border-top pt-2">{{ comment }}</div>
      </div>
    </div>
  `
})
export class PostItem {
  @Input() post: any;
  commentText = '';

  addComment() {
    if (!this.commentText.trim()) return;
    this.post.comments.push(this.commentText.trim());
    this.commentText = '';
  }
}
