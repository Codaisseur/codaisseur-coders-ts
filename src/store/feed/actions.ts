import axios from "axios";
import { Dispatch } from "redux";
import { ReduxState } from "..";
import { FeedAction } from "./types";
import { Post } from "../types";
import { API_URL } from "../config";

export const startLoading = (): FeedAction => ({
  type: "feed/startLoading",
});

export const postsFetched = (morePosts: Post[]): FeedAction => ({
  type: "feed/postsFetched",
  payload: morePosts,
});

export const fetchNext5Posts = async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  dispatch(startLoading());

  const offset = getState().feed.posts.length;

  const res = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);

  const morePosts = res.data.rows;

  dispatch(postsFetched(morePosts));
};
