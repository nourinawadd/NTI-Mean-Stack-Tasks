import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.html'
})
export class CommentSection {
  @Input() comments: Comment[] = [];
  @Output() commentSubmitted = new EventEmitter<string>();
  text = '';

  submitComment() {
    const trimmed = this.text.trim();
    if (!trimmed) return;
    this.commentSubmitted.emit(trimmed);
    this.text = '';
  }
}
