import { AuthAction, AuthState } from "./types";

const initialState: AuthState = {
  me: null, // the logged-in user
  accessToken: null, //jwt -> token
};

export default function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case "auth/saveUserData":
      const { token, userProfile: me } = action.payload;
      return {
        accessToken: token,
        me,
      };
    default:
      return state;
  }
}
