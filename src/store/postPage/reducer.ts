import { PostPageState, PostPageAction } from "./types";

const initialState: PostPageState = {
  loading: false,
  post: null,
  comments: [],
};

export default function postPageSliceReducer(
  state = initialState,
  action: PostPageAction
) {
  switch (action.type) {
    case "postPage/startLoadingPost": {
      return {
        ...state,
        loading: true,
      };
    }
    case "postPage/postFullyFetched": {
      return {
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }
    default: {
      return state;
    }
  }
}
