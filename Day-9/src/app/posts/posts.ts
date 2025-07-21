import { Component } from '@angular/core';
import { Ipost } from '../postModel';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  posts: Ipost[] = [
    { title: 'Post 1',
      body: 'Random text',
      id: 1,
      userid: 1,
      username: 'nourinawad' },
    { title: 'Post 2',
      body: 'More random text',
      id: 2,
      userid: 2,
      username: 'munaaldhshan' },
    { title: 'Post 3',
      body: 'Even more random text',
      id: 3,
      userid: 3,
      username: 'tamimawad' }
  ];
}
