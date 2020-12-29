import { ReduxState } from "../index";

export function selectFeedLoading(reduxState: ReduxState) {
  return reduxState.feed.loading;
}

export function selectFeedPosts(reduxState: ReduxState) {
  return reduxState.feed.posts;
}
