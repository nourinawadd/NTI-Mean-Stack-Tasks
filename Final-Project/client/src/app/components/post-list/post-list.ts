import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { PostItem } from '../post-item/post-item';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostItem],
  template: `
    <app-post-item *ngFor="let post of posts" [post]="post"></app-post-item>
  `
})
export class PostList {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Failed to load posts:', err)
    });
  }
}