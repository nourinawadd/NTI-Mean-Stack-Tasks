import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <textarea [(ngModel)]="content" rows="4" class="form-control mb-2" placeholder="What's on your mind?"></textarea>
    <button class="btn btn-primary w-100" (click)="createPost()">Post</button>
  `
})
export class PostForm {
  content = '';
  constructor(private postService: PostService) {}

  createPost() {
    if (!this.content.trim()) return;
    this.postService.addPost(this.content).subscribe({
      next: () => this.content = '',
      error: (err) => console.error('Post failed:', err)
    });
  }
}