import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app';
import { NavBar } from './components/nav-bar/nav-bar';
import { CommentSection } from './components/comment-section/comment-section';
import { PostForm } from './components/post-form/post-form';
import { PostList } from './components/post-list/post-list';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    CommentSection,
    PostForm,
    PostList
  ],
  imports: [ BrowserModule, FormsModule, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }

