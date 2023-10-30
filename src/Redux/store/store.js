import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "../Auth/Reducer";
import { UserReducer } from "../User/Reducer";
import { PostReducer } from "../Post/Reducer";
import { CommentReducer } from "../Comments/Reducer";

const rootReducers = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  post: PostReducer,
  comment: CommentReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
