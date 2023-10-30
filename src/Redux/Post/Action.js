import {
  CREATE_NEW_POST,
  DELETE_POST,
  GET_PROFILE_POST,
  GET_SINGLE_POST,
  GET_USER_POST,
  LIKE_POST,
  REQ_USER_POST,
  SAVE_POST,
  UNLIKE_POST,
  UNSAVE_POST,
} from "../../Redux/Post/ActionType";

const BASE_API = "http://localhost:5454/api";
export const createPostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt, // Corrected spelling here
      },
      body: JSON.stringify(data.data),
    });
    const post = await res.json();

    dispatch({ type: CREATE_NEW_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};

export const findUserPostAction = (data) => async (dispatch) => {
  try {
    debugger;
    const res = await fetch(`${BASE_API}/posts/following/${data.userIds}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.json();

    dispatch({ type: GET_USER_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};

export const findUserKiPostAction = (data) => async (dispatch) => {
  try {
    debugger;
    const res = await fetch(`${BASE_API}/posts/all/${data.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.json();

    dispatch({ type: GET_PROFILE_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};

export const reqUserPostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/following/${data.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.json();

    dispatch({ type: REQ_USER_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};
export const likePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/like/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.json();

    dispatch({ type: LIKE_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};
export const unLikePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/unlike/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.json();

    dispatch({ type: UNLIKE_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};

export const savePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/save_post/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const post = await res.json();

    dispatch({ type: SAVE_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};

export const unSavePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/unsave_post/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.json();

    dispatch({ type: UNSAVE_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};
export const findPostByIdAction = (data) => async (dispatch) => {
  try {
    debugger;
    const res = await fetch(`${BASE_API}/posts/${data.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.json();

    dispatch({ type: GET_SINGLE_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};
export const deleteostByIdAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API}/posts/delete/${data.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.json();

    dispatch({ type: DELETE_POST, payload: post });
  } catch (error) {
    console.log("Catch", error);
  }
};
