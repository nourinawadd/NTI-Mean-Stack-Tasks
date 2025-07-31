import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post.model'; 

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css'
})
export class PostItem {
  @Input() post!: Post;
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
