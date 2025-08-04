import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PostForm } from './components/post-form/post-form';
import { PostList } from './components/post-list/post-list';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PostForm,
    PostList,
    Login,
    Register
  ],
  templateUrl: './app.html'
})
export class AppComponent {}
