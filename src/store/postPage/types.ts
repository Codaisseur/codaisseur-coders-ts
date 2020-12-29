import { Post } from "../types";

export type Developer = {
  id: number;
  email: string;
  name: string;
  intro: string;
  github_username: string;
  website: string;
  createdAt: string;
  technologies: any[];
};

export interface DetailedPost extends Post {
  developer: Developer;
}

export type PostComment = {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  developer: Developer;
};

export type PostPageState = {
  loading: boolean;
  post: null | DetailedPost;
  comments: PostComment[];
};

export type PostFullyFetchedPayload = {
  post: DetailedPost;
  comments: PostComment[];
};

export type PostPageAction =
  | { type: "postPage/startLoadingPost" }
  | { type: "postPage/postFullyFetched"; payload: PostFullyFetchedPayload };
