export interface IArticle {
  id: string;
  title: string;
  content: string;
  url: string;
  img: string;
}

export interface IComment {
  id: string;
  content: string;
  email: string;
  createdDate: number;
}
