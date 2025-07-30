import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';
import { PostItem } from '../post-item/post-item';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostItem],
  template: `
    <app-post-item *ngFor="let post of posts" [post]="post"></app-post-item>
  `
})
export class PostList implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe({
      next: data => this.posts = data,
      error: err => console.error('Failed to fetch posts', err)
    });
  }
}
