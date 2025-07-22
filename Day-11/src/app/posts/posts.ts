import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Ipost } from '../models/postModel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.html',
  styleUrls: ['./posts.css'],
  standalone: false
})
export class Posts implements OnInit {
  posts: Ipost[] = [];
  newPost: Ipost = {
    id: 0,
    userid: 1,
    title: '',
    body: '',
    date: new Date()
  };

  likes: { [key: number]: number } = {};
  comments: { [key: number]: string[] } = {};
  newComments: { [key: number]: string } = {};

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.posts.forEach(p => {
      this.likes[p.id] = 0;
      this.comments[p.id] = [];
      this.newComments[p.id] = '';
    });
  }

  addPost() {
    const nextId = this.posts.length ? Math.max(...this.posts.map(p => p.id)) + 1 : 1;
    this.newPost.id = nextId;
    this.newPost.date = new Date();
    this.postService.addPost({ ...this.newPost });
    this.newPost.title = '';
    this.newPost.body = '';
    this.posts = this.postService.getPosts();
    this.likes[nextId] = 0;
    this.comments[nextId] = [];
    this.newComments[nextId] = '';
  }

  likePost(id: number) {
    this.likes[id]++;
  }

  removePost(id: number) {
    this.postService.deletePost(id);
    this.posts = this.postService.getPosts();
  }

  addComment(postId: number) {
    const comment = this.newComments[postId].trim();
    if (comment) {
      this.comments[postId].push(comment);
      this.newComments[postId] = '';
    }
  }
}
