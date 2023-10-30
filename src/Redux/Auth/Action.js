import { json } from "react-router-dom";
import { SIGN_IN, SIGN_UP } from "./ActionType";

export const signinAction = (data) => async (dispatch) => {
  try {
    console.log(btoa(data.email + ":" + data.password));
    const res = await fetch("http://localhost:5454/signin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(data.email + ":" + data.password),
        "Access-Control-Allow-Origin": "http://localhost:3000", // Replace with the origin of your React app
      },
    });
    const token = await res.headers.get("Authorization");
    console.log(token);
    // const token = await res.headers.get("Authorization");

    localStorage.setItem("token", token);
    dispatch({ type: SIGN_IN, payload: token });
    // console.log("tokk" + token);
  } catch (error) {
    console.log(error);
  }
};

export const signupAction = (data) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5454/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const user = await res.json();
    console.log("inside sign up" + user);
    dispatch({ type: SIGN_UP, payload: user });
  } catch (error) {
    console.log(error);
  }
};
