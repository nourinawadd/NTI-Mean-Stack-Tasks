import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Ipost } from '../models/postModel';

@Component({
  standalone: false,
  selector: 'app-posts',
  templateUrl: './posts.html',
  styleUrls: ['./posts.css']
})
export class Posts implements OnInit {
  posts: Ipost[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  removePost(id: number) {
    this.postService.deletePost(id);
    this.posts = this.postService.getPosts();
  }
}
