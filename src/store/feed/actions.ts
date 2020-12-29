import { FeedAction, Post } from "./types";

export const startLoading = (): FeedAction => ({
  type: "feed/startLoading",
});

export const postsFetched = (morePosts: Post[]): FeedAction => ({
  type: "feed/postsFetched",
  payload: morePosts,
});
