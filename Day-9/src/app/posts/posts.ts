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
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id: 1,
      userid: 1,
      username: 'ali'
    },
    {
      title: 'Angular Basics',
      body: 'Learning components, bindings, and directives.',
      id: 2,
      userid: 2,
      username: 'mona'
    }
  ];
}
