export type AuthState = {
  me: any;
  accessToken: null | string;
};

export type AuthAction = {
  type: "auth/saveUserData";
  payload: {
    token: string;
    userProfile: any;
  };
};
