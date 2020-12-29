import { Post } from "../types";

export type FeedState = {
  loading: boolean;
  posts: Post[];
};

export type FeedAction =
  | { type: "feed/startLoading" }
  | { type: "feed/postsFetched"; payload: Post[] };
