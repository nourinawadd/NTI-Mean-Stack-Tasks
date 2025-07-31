
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostForm } from './components/post-form/post-form';
import { PostList } from './components/post-list/post-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    PostForm,
    PostList
  ],
  templateUrl: './app.html'
})
export class AppComponent {}
