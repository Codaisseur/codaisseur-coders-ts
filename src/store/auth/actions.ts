import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../config";

const saveUserData = (token: string, userProfile: any) => {
  return {
    type: "auth/saveUserData",
    payload: { token, userProfile },
  };
};

const getUserProfile = async (token: string) => {
  try {
    // request GET to /me
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const login = (email: string, password: string) => async (
  dispatch: Dispatch
) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    // console.log(response);
    const { jwt } = response.data;

    const userProfile = await getUserProfile(jwt);

    localStorage.setItem("jwt", jwt);

    dispatch(saveUserData(jwt, userProfile));
  } catch (e) {
    console.log("error", e);
  }
  // do POST request to /login,
  // console.log response
};

export const bootstrapLogin = () => async (dispatch: Dispatch) => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    // make /me call
    const userProfile = await getUserProfile(jwt);
    console.log("user profile loaded automatically", userProfile);
    dispatch(saveUserData(jwt, userProfile));
  } else {
    console.log("no token stored in localstorage");
  }
};
