import { FeedState, FeedAction } from "./types";

const initialState: FeedState = {
  loading: false,
  posts: [],
};

export default function feedSliceReducer(
  state = initialState,
  action: FeedAction
) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "feed/postsFetched": {
      return {
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
