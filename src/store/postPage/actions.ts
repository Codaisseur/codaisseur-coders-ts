// src/store/postPage/actions.js
import axios from "axios";
import { Dispatch } from "redux";
import { ReduxState } from "..";
import { API_URL } from "../config";
import { PostFullyFetchedPayload } from "./types";

export const startLoadingPost = () => ({
  type: "postPage/startLoadingPost",
});

export const postFullyFetched = (data: PostFullyFetchedPayload) => ({
  type: "postPage/postFullyFetched",
  payload: data,
});

export const fetchPost = (id: number) => async (
  dispatch: Dispatch,
  getState: () => ReduxState
) => {
  dispatch(startLoadingPost());

  const [postResponse, commentsResponse] = await Promise.all([
    axios.get(`${API_URL}/posts/${id}`),
    axios.get(`${API_URL}/posts/${id}/comments`),
  ]);

  dispatch(
    postFullyFetched({
      post: postResponse.data,
      comments: commentsResponse.data.rows,
    })
  );
};
