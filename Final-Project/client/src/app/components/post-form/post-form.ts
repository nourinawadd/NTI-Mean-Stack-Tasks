import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.html',
  styleUrls: ['./post-form.css']
})
export class PostForm {
  content = '';
  userId = ''; // set after login
  constructor(private postService: PostService) { }
  submitPost(): void {
    if (!this.content.trim()) return;
    this.postService.createPost(this.content, this.userId).subscribe(() => {
      this.content = '';
      this.postService.getPosts().subscribe();
    });
  }
}
