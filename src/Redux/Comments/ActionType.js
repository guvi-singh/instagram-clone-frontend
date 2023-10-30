import {
  CREATE_COMMENT,
  GET_POST_COMMENT,
  LIKE_COMMENT,
  UNLIKE_COMMENT,
} from "./Action";

const BASE_API = "http://localhost:5454/api";
export const createCommentAction = (data) => async (dispatch) => {
  try {
    debugger;
    const res = await fetch(`${BASE_API}/comments/create/${data.postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data.data),
    });

    const comment = await res.json();
    dispatch({ type: CREATE_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};

export const findPostCommentAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/comments/${data.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const comment = await res.json();
    dispatch({ type: GET_POST_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};
export const likeCommentAction = (data) => async (dispatch) => {
  try {
    debugger;
    const res = await fetch(`${BASE_API}/comments/like/${data.commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    debugger;
    const comment = await res.json();
    dispatch({ type: LIKE_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};
export const unlikeCommentAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/comments/unlike/${data.commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const comment = await res.json();
    dispatch({ type: UNLIKE_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};
