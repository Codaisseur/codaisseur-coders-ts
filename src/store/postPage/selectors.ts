import { ReduxState } from "..";

export const selectPostAndComments = (reduxState: ReduxState) =>
  reduxState.postPage.loading
    ? null
    : {
        post: reduxState.postPage.post,
        comments: reduxState.postPage.comments,
      };
