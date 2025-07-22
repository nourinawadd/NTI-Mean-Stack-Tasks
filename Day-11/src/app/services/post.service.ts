import { Injectable } from '@angular/core';
import { Ipost } from '../models/postModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Ipost[] = [
    {
      id: 1,
      userid: 1,
      title: 'Hi! This is a post',
      body: 'and this is a body!',
      date: new Date()
    },
    {
      id: 2,
      userid: 2,
      title: 'Man I love this website',
      body: 'this is so fun',
      date: new Date()
    }
  ];

  getPosts(): Ipost[] {
    return this.posts;
  }

  addPost(post: Ipost): void {
    this.posts.push(post);
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter(p => p.id !== id);
  }

  updatePost(updatedPost: Ipost): void {
    const index = this.posts.findIndex(p => p.id === updatedPost.id);
    if (index > -1) {
      this.posts[index] = { ...updatedPost };
    }
  }
}
