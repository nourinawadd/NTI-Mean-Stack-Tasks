export interface AppComment {
  _id: string;
  text: string;
  createdAt: string;
  user: {
    _id: string;
    username: string;
    imgurl?: string;
  };
}
