import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItem } from '../post-item/post-item';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { PostForm } from '../post-form/post-form';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostItem, PostForm],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    // Initial load
    this.loadPosts();

    // Reload when new post is added
    this.postService.refreshPosts$.subscribe(() => {
      this.loadPosts();
    });
  }

  private loadPosts() {
    this.postService.getPosts().subscribe(data => this.posts = data);
  }
}
