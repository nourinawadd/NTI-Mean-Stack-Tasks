import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  userId: string = 'demo-user-id'; // temporary static user ID

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  likePost(postId: string): void {
    this.postService.likePost(postId, this.userId).subscribe(() => {
      this.loadPosts();
    });
  }

  deletePost(postId: string): void {
    this.postService.deletePost(postId).subscribe(() => {
      this.loadPosts();
    });
  }

  comment(postId: string, commentText: string): void {
    if (!commentText.trim()) return;
    this.postService.addComment(postId, this.userId, commentText).subscribe(() => {
      this.loadPosts();
    });
  }
}
