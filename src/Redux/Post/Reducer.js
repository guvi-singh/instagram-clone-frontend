import {
  CREATE_NEW_POST,
  DELETE_POST,
  GET_SINGLE_POST,
  GET_USER_POST,
  LIKE_POST,
  SAVE_POST,
  UNLIKE_POST,
  UNSAVE_POST,
  GET_PROFILE_POST,
} from "../../Redux/Post/ActionType.js";

const initialValue = {
  createdPost: null,
  usersPost: [],
  profilePost: [],
  deletePost: null,
  likePost: null,
  unlikePost: null,
  singlePost: null,
  savedPost: null,
  unsavedPost: null,
};

export const PostReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_POST:
      return { ...state, createdPost: payload };
    case GET_USER_POST:
      return { ...state, usersPost: payload };
    case DELETE_POST:
      return { ...state, deletePost: payload };
    case LIKE_POST:
      return { ...state, likePost: payload };
    case UNLIKE_POST:
      return { ...state, unlikePost: payload };
    case SAVE_POST:
      return { ...state, savedPost: payload };
    case UNSAVE_POST:
      return { ...state, unsavedPost: payload };
    case GET_SINGLE_POST:
      return { ...state, singlePost: payload };
    case GET_PROFILE_POST:
      return { ...state, profilePost: payload };
    default:
      return state; // Explicitly return the initial state if the action type doesn't match any of the cases.
  }
};
