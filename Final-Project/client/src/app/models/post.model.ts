import { User } from './user.model';
import { Comment } from './comment.model';

export interface Post {
  _id: string;
  content: string;
  user: User;
  likes: string[]; // user IDs
  comments: Comment[];
  createdAt: string;
}
