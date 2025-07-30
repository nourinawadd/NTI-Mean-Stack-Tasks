import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.html'
})
export class PostList implements OnInit {
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(posts => (this.posts = posts));
  }

  onComment(postId: string, text: string) {
    const user = this.authService.currentUser;
    if (!user) return;

    this.postService.addComment(postId, user._id, text).subscribe((newComment: Comment) => {
      const post = this.posts.find(p => p._id === postId);
      if (post) post.comments.push(newComment);
    });
  }

}
