export interface Post {
  _id?: string;
  content: string;
  likes: number;
  comments: { id: string; text: string }[];
}
