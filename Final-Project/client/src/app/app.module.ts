
import { Component } from '@angular/core';
import { PostForm } from './components/post-form/post-form';
import { PostList } from './components/post-list/post-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PostForm, PostList],
  template: `
    <div class="container p-4">
      <h1 class="text-center mb-4">Social Feed</h1>
      <app-post-form></app-post-form>
      <app-post-list></app-post-list>
    </div>
  `
})
export class AppComponent {}
