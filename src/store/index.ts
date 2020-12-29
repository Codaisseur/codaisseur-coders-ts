// src/store/index.ts
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";

const rootReducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
});

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(rootReducer, enhancer);

export default store;

export type ReduxState = ReturnType<typeof rootReducer>;
