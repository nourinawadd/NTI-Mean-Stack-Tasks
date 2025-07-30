import { Component } from '@angular/core';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.html',
  styleUrls: ['./post-form.css']
})
export class PostFormComponent {
  content: string = '';
  userId: string = 'demo-user-id'; // temp static user

  constructor(private postService: PostService) {}

  submitPost(): void {
    if (!this.content.trim()) return;
    this.postService.createPost(this.content, this.userId).subscribe(() => {
      this.content = '';
    });
  }
}
