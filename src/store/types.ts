export type PostTag = {
  id: number;
  tag: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author_id: number;
  tags: PostTag[];
};
