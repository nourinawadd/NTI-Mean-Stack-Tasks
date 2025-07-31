import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css'
})
export class PostForm {
  content = '';
  constructor(private postService: PostService) {}

  createPost() {
    if (!this.content.trim()) return;
    this.postService.addPost(this.content).subscribe({
      next: () => {
        this.content = '';
        this.postService.triggerRefresh(); // 🔥 tell PostList to update
      },
      error: (err) => console.error('Post failed:', err)
    });
  }

}