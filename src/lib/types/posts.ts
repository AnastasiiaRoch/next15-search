export type TagsType = string[];

export interface IPost {
  body?: string;
  id: number;
  tags?: TagsType;
  title: string;
  userId?: number;
  views?: number;
  reactions?: {
    likes: number;
    dislikes: number;
  };
}
